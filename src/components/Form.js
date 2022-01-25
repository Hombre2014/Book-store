import './form.css';

function Form() {
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" id="book" required placeholder="Book title" />
        <div>
          <select id="category" name="category">
            <option value="" disabled selected>Category</option>
            <option value="action">Action</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-fiction</option>
            <option value="biography">Biography</option>
          </select>
        </div>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
