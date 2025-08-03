// EX1:Create your component
// import the useState() hook
import { useState } from 'react';
// 

const Bookshelf = () => {
const [books, setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);
  // State for new book input fields
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });
  // 3. Handle input changes (update newBook state)
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // to keep other fields unchanged
    setNewBook({
      ...newBook,
      [name]: value, // update only the field being typed into
    }); 
      };
    // 4. Handle form submit (add new book to books list)
  const handleSubmit = (event) => {
    event.preventDefault(); // stop the page from refreshing

    // Add new book to books array
    setBooks([
      ...books,
      newBook,
    ]);

    // Clear the form inputs
    setNewBook({
      title: '',
      author: '',
    });
    
  
  };


    //set up BookShelf component:

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
       <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            value={newBook.title}
onChange={handleInputChange}
          />
          <label htmlFor="author">Author: </label>
          <input
            id="author"
            name="author"
            value={newBook.author}
onChange={handleInputChange}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
