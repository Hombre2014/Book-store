import { useSelector } from 'react-redux';
import SingleBook from './SingleBook';

const BooksList = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <ul>
      {books.map(
        (book) => (
          <SingleBook
            key={book.id}
            id={book.id}
            category={book.category}
            title={book.title}
          />
        ),
      )}
    </ul>
  );
};

export default BooksList;
