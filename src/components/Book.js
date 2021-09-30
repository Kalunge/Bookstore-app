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
    <div className="book-panel">
      <div className="info">
        <span className="category">{book.category}</span>
        <h2 className="title my-t">{book.title}</h2>
        <span className="remove">
          <button
            onClick={() => removeBookFromStore(book.item_id)}
            type="button"
          >
            Remove
          </button>
        </span>
      </div>
      <div className="flex">
        <span className="">Current Chapter</span>
        <span className="current">Chapter 17</span>

        <div className="update">
          <span className="progress">Update progress</span>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
