/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { addBook, getBooks, removeBook } from './books';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jYLpfFFNrGPhM35GyKxf/books';

export const addingBook = (book) => async (dispatch) => {
  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  dispatch(addBook(book));
};

export const gettingBooks = () => async (dispatch) => {
  const res = await fetch(URL);
  const data = await res.json();

  const books = Object.entries(data).map(([item_id, bookInfo]) => {
    const { category, title } = bookInfo[0];
    return {
      item_id,
      category,
      title,
    };
  });
  dispatch(getBooks(books));
};

export const removingBook = (item_id) => async (dispatch) => {
  const res = await fetch(`${URL}/${item_id}`, {
    method: 'DELETE',
  });
  dispatch(removeBook(item_id));
};
