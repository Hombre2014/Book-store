import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './singleBook.css';

const SingleBook = (book) => {
  const {
    id, category, title,
  } = book;

  const dispatch = useDispatch();

  const RemoveBookFromStore = () => {
    dispatch(removeBook(id));
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
