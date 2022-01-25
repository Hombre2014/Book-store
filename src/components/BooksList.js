import SingleBook from './SingleBook';

function BooksList() {
  const initialState = {
    id: '1',
    title: 'Learning Redux',
    author: 'Daniel Bugl',
  };
  return (
    <ul>
      <SingleBook id={initialState.id} title={initialState.title} author={initialState.author} />
    </ul>
  );
}

export default BooksList;
