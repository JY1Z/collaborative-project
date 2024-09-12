import React, { useState } from "react";
import Book from './Book.js'
import './BookCollection.css'

function BookCollectionManager() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "", year: "" });

  // Handle input change for both fields
  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  }

  // Add a new book to the list
  function addBook() {
    if (newBook.title.trim() !== "" && newBook.author.trim() !== "") {
      setBooks((b) => [...b, newBook]);
      setNewBook({ title: "", author: "", year: "" }); // Clear the input fields
    }
  }

  // Delete a book from the list
  function deleteBook(index) {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  }

  return (
    <div className="book-collection">
      <h1>Book Collection Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Book Title"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Author Name"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Year Published"
          name="year"
          value={newBook.year}
          onChange={handleInputChange}
        />
        <button onClick={addBook} id="add_button">Add Book</button>
      </div>
      <ol>
        {books.map((book, index) => (
          <li className="listitem">
              <Book book={book} />
              <button className="deletebutton" onClick={() => deleteBook(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div >
  );
}

export default BookCollectionManager;