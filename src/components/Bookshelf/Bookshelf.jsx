import { useState } from "react";

function Bookshelf() {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  function handleInputChange(event) {
    setNewBook((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newListOfBooks = [...books, newBook];
    setBooks(newListOfBooks);
    setNewBook({ title: "", author: "" });
  }

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
            <button>Add Book</button>
          </form>
        </div>
        <div className="bookCardsDiv">
          {books.map((book, index) => (
            <div className="bookCard" key={index}>
              <div className="title">{book.title}</div>
              <div className="author">{book.author}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Bookshelf;
