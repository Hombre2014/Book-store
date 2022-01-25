import { useSelector } from 'react-redux';
import SingleBook from './SingleBook';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  console.log(books);
  return (
    <ul>
      {books.map((book) => <SingleBook key={book.id} book={book.title} />)}
    </ul>
  );
};

export default BooksList;
