/* eslint-disable import/no-useless-path-segments */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const middleware = [logger, thunk];

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
