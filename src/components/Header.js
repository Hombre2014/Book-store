import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="top">
      <div className="left-header">
        <h1>Bookstore CMS</h1>
        <nav>
          <Link to="/">BOOKS</Link>
          <Link to="/categories">CATEGORIES</Link>
        </nav>
      </div>
      <div>
        <span>logo</span>
      </div>
    </header>
  );
}

export default Header;
