class Book {
  constructor(title, author, pubDate, isbn) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
    this.isbn = isbn;
  }
}

// Create a book
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");

class Library {
  constructor(name) {
    this._name = name;
    this._books = [];
  }
  get books() {
    // Return copy of books
    return JSON.parse(JSON.stringify(this._books));
  }
  get count() {
    return this._books.length;
  }
  addBook(book = {}) {
    const { title = "", author = "", pubDate = "", isbn = "" } = book;
    if (title.length > 0 && author.length > 0) {
      const newBook = { title, author, pubDate, isbn};
      this._books.push(newBook);
    }
  }
  listBooks() {
    for (const book of this._books) {
      const {title, author, pubDate, isbn} = book;
      console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, Isbn: ${isbn}`)
    }
  }
  deleteBook(isbn) {
      const index = this._books.findIndex(book => book.isbn === isbn);
      if (index !== -1) {
           this._books.splice(index, 1);
      }
  }
}

// Create library object
const library = new Library("New York Times Best Seller List");

// Create books + added two more books -- modified the instructions to fi=it my code including adding the isbn numbers to the end of the books I created
const theLsatTrainer = new Book("The LSAT Trainer", "Mike Kim", "10/05/2021", "059346527X");

const mockTrial = new Book("Guide to Mock Trial", "Bennet Demsky", "10/01/2021", "1398505501");


// Add book to library and output library count and books
library.addBook(atomicHabits);
library.addBook(theLsatTrainer);
library.addBook(mockTrial);
console.log(`Book count: ${library.count}`);
library.listBooks();

// Delete a book and output library books
console.log("* Library after delete *");
library.deleteBook("059346527X");
library.listBooks();

