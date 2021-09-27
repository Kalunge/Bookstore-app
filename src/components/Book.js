import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <div>
    <h3>{book.title}</h3>
    <button type="button">Remove</button>
  </div>
);

Book.propTypes = {
  book: PropTypes.objectOf.isRequired,
};

export default Book;
