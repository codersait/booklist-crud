const tbody = document.querySelector('tbody')
const resource = 'http://localhost:3000/books/'

window.addEventListener('DOMContentLoaded', () => {
  getBooks().then(renderData)
})

async function getBooks() {
  const response = await fetch(resource);
  const data = await response.json();
  return data
}

async function deleteBookById(id) {
  await fetch(`${resource}${id}`, {
    method: 'DELETE'
  })
}


tbody.addEventListener('click', (e) => {
  if (e.target.className == 'del') {
    const id = +e.target.closest('tr').children[0].textContent;
    // delete from db
    deleteBookById(id)
  };
})
tbody.addEventListener('click', (e) => {
  if (e.target.className == 'update') {
    const id = +e.target.closest('tr').children[0].textContent;
    localStorage.setItem('id', id)
  };
})


function renderData(data) {
  data.forEach(book => {
    tbody.innerHTML += `<tr>
                          <td>${book.id}</td>
                          <td>${book.title}</td>
                          <td>${book.author}</td>
                          <td>${book.publisher}</td>
                          <td>${book.publishDate}</td>
                          <td>
                            <button class="del">Delete</button>
                            <a href="updateBook.html">
                              <button class="update">Update</button>
                            </a>
                            
                          </td>
                        </tr>`
  })
}