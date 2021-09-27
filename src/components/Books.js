import React from 'react';
import PropTypes from 'prop-types';
import AddBook from './AddBook';
import Book from './Book';

const Books = ({ books }) => (
  <ul>
    {books.map((book) => (
      <Book key={book.id} book={book} />
    ))}
    <AddBook />
  </ul>
);

Books.propTypes = {
  books: PropTypes.arrayOf.isRequired,
};

export default Books;
