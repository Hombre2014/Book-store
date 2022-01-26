/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import { removingBook } from '../redux/books/booksActions';
import './singleBook.css';

const SingleBook = (book) => {
  const {
    item_id, category, title,
  } = book;

  const dispatch = useDispatch();

  const RemoveBookFromStore = () => {
    dispatch(removingBook(item_id));
  };

  return (
    <li className="book-container">
      <span>{category}</span>
      <h2>{title}</h2>
      <button onClick={RemoveBookFromStore} type="button">Remove</button>
    </li>
  );
};

export default SingleBook;
