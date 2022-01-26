import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addingBook } from '../redux/books/booksActions';
import './form.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const clearInputTitle = () => setTitle('');
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };
    dispatch(addingBook(newBook));
    clearInputTitle();
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleOnSubmit}>
        <input value={title} onChange={handleTitleChange} type="text" id="book" required placeholder="Book title" />
        <div>
          <select default value={category} id="category" name="category" onChange={handleCategoryChange}>
            <option value="" disabled>Category</option>
            <option value="Action">Action</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-fiction">Non-fiction</option>
            <option value="Biography">Biography</option>
            <option value="History">History</option>
          </select>
        </div>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
