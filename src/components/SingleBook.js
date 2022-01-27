/* eslint-disable camelcase */
import { useDispatch } from 'react-redux';
import { removingBook } from '../redux/books/booksActions';
import './singleBook.css';
import progressImage from '../images/circle.png';

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
      <div>
        <span className="category">{category}</span>
        <h2 className="title">{title}</h2>
        <span className="author">Frank Herbert</span>
        <div>
          <button className="links" type="button" href="#">Comments</button>
          <button className="links remove" onClick={RemoveBookFromStore} type="button">Remove</button>
          <button className="links" type="button" href="#">Edit</button>
        </div>
      </div>
      <div className="meta-data">
        <div className="progress">
          <img src={progressImage} className="circle" alt="progress bar" />
          <div className="numbers">
            <span className="percent">75%</span>
            <span className="completed">Completed</span>
          </div>
        </div>
        <div className="chapter">
          <span className="current">CURRENT CHAPTER</span>
          <span className="chapter-number">Chapter 17</span>
          <button className="update" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
};

export default SingleBook;
