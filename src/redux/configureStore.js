import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
// import { initialState } from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(
  reducer,
  // (state, action) => reducer(state, action), initialState,
  applyMiddleware(logger),
);

export default store;
