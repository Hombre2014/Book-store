import PropTypes from 'prop-types';
import './singleBook.css';

const SingleBook = (props) => {
  const {
    id, title, author,
  } = props;

  return (
    <li key={id} className="book-container">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button">Remove</button>
    </li>
  );
};

SingleBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  // category: PropTypes.string.isRequired,
};

export default SingleBook;
