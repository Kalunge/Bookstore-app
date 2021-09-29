/* eslint-disable no-restricted-syntax */
import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const removeBook = (payload) => async (dispatch) => {
  const { data } = await axios.delete(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6mNNN1uJAaAaYnbaqZwF/books/${payload}`,
  );
  if (data === 'The book was deleted successfully!') {
    dispatch({ type: REMOVE_BOOK, payload });
  }
};

export const addBook = (payload) => async (dispatch) => {
  const { data } = await axios.post(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6mNNN1uJAaAaYnbaqZwF/books',
    payload,
    {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    },
  );
  if (data === 'Created') {
    dispatch({ type: ADD_BOOK, payload });
  }
};

export const getBooks = () => async (dispatch) => {
  const { data } = await axios.get(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6mNNN1uJAaAaYnbaqZwF/books',
  );
  const formattedBooks = [];
  for (const key in data) {
    if (key) {
      formattedBooks.push({ ...data[key][0], item_id: key });
    }
  }
  dispatch({ type: GET_BOOKS, payload: formattedBooks });
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== payload);
    case GET_BOOKS:
      return payload;
    default:
      return state;
  }
};

export default reducer;
