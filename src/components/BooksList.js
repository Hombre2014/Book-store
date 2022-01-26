import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SingleBook from './SingleBook';
import { gettingBooks } from '../redux/books/booksActions';

const BooksList = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(gettingBooks()); }, []);

  return (
    <ul>
      {books.map(
        (book) => (
          <SingleBook
            key={book.item_id}
            item_id={book.item_id}
            category={book.category}
            title={book.title}
          />
        ),
      )}
    </ul>
  );
};

export default BooksList;
