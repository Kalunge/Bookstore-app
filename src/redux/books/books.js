import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const removeBook = (payload) => async (dispatch) => {
  const { data } = await axios.delete(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6mNNN1uJAaAaYnbaqZwF/books/${payload}`,
  );
  dispatch({ type: REMOVE_BOOK, payload: data });
};

export const addBook = (payload) => async (dispatch) => {
  const body = JSON.stringify(payload);
  const { data } = await axios.post(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6mNNN1uJAaAaYnbaqZwF/books',
    body,
  );
  console.log(`id is ${data}`);
  dispatch({ type: ADD_BOOK, payload: data });
};

export const getBooks = () => async (dispatch) => {
  const { data } = await axios.get(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6mNNN1uJAaAaYnbaqZwF/books',
  );

  dispatch({ type: GET_BOOKS, payload: data });
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== payload);
    default:
      return state;
  }
};

export default reducer;
