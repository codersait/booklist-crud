const thead = document.querySelector('thead')
const tbody = document.querySelector('tbody')
const delButton = document.querySelector('.del')
const resource = 'http://localhost:3000/books/'

window.addEventListener('DOMContentLoaded', () => {
  getBooks().then(displayData)
})

async function getBooks() {
  const response = await fetch(resource);
  const data = await response.json();
  return data
}

async function deleteBook(id) {
  await fetch(`${resource}${id}`, {
    method: 'DELETE'
  })
}
delButton.addEventListener('click', deleteBook)

// deleteBook(1637239634564).then(getBooks).then(displayData)
// deleteBook(1637239634564).then(() => {
//   getBooks()
// }).then(displayData)

function displayData(data) {
  data.forEach(book => {
    tbody.innerHTML += `<tr>
                          <td>${book.title}</td>
                          <td>${book.author}</td>
                          <td>${book.isbn}</td>
                          <td>${book.publisher}</td>
                          <td>${book.publishDate}</td>
                          <td>
                            <button class="del">Delete</button>
                            <button class="update">Update</button>
                          </td>
                        </tr>`
  })
}