import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <>
      <ul>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
      <AddBook />
    </>
  );
};

export default Books;
