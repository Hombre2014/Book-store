import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="top">
      <div className="left-header">
        <h1>Bookstore CMS</h1>
        <nav className="navigation">
          <Link to="/">BOOKS</Link>
          <Link className="cat" to="/categories">CATEGORIES</Link>
        </nav>
      </div>
      <div className="user">
        <FaUser className="fa-user" />
      </div>
    </header>
  );
}

export default Header;
