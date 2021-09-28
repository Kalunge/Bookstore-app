import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: title || 'The river Between',
      author: author || 'Ngugi',
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={addBookToStore}>
      <span className="title Text-Style-10">ADD NEW BOOK</span>
      <br />
      <input
        className="add-book"
        placeholder="Add Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="add-book"
        placeholder="Add Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
