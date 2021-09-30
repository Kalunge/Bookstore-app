import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const addBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
  };
  return (
    <>
      <form onSubmit={addBookToStore}>
        <br />
        <input
          className="add-book"
          placeholder="   Add Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="add-book"
          placeholder="     Add category"
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
        />
        <button className="btn" type="submit">
          Add Book
        </button>
      </form>
    </>
  );
};

export default AddBook;
