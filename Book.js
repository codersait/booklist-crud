export class Book {
  constructor(title, author, publisher, publishDate) {
    this.isbn = Date.now();
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.publishDate = publishDate;
  }
}