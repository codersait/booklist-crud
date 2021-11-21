import { Book } from "./Book.js";
const resource = 'http://localhost:3000/books/'
// import { getBookById } from "./app.js";

const form = document.querySelector('form');
const createBook = async (e) => {
  e.preventDefault();
  const book = new Book(
    form.title.value,
    form.author.value,
    form.publisher.value,
    form.publishDate.value
  )
  await fetch('http://localhost:3000/books', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(book),

  })
  window.location.replace('/index.html')
}

form.addEventListener('submit', createBook)
