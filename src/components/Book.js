/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <h3>{book.title}</h3>
      {' '}
      <h5>
        Author:
        <strong style={{ color: 'blue' }}>{book.author}</strong>
      </h5>
      <button onClick={() => removeBookFromStore(book.id)} type="button">
        Remove
      </button>
    </div>
  );
};

Book.defaultProps = {
  book: {},
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
