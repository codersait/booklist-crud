import { Book } from "./Book.js";
const resource = 'http://localhost:3000/books/'
// import { getBookById } from "./app.js";
window.addEventListener('load', async () => {
  const book = await getBookById(localStorage.getItem('id'))
  form.title.value = book.title,
    form.author.value = book.author,
    form.publisher.value = book.publisher,
    form.publishDate.value = book.publishDate
})
const form = document.querySelector('form');

async function updateBookById(e) {
  e.preventDefault()
  const id = localStorage.getItem('id');
  const book = await getBookById(id)
  book.title = form.title.value,
    book.author = form.author.value,
    book.publisher = form.publisher.value,
    book.publishDate = form.publishDate.value
  await fetch(`${resource}${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(book),
  })
  window.location.replace('/index.html')
}
async function getBookById(id) {
  const response = await fetch(`${resource}${id}`);
  const data = await response.json();
  return data
}
form.addEventListener('submit', updateBookById)
