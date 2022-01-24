import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <Router>
      <main className="container">
        <Header />
        <Routes>
          <Route path="/" exact element={<Books />} />
          <Route path="/categories" exact element={<Categories />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
