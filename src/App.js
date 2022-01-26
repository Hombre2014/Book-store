import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './App.css';
import Header from './components/Header';
import Books from './components/pages/Books';
import Categories from './components/pages/Categories';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <main className="container">
          <Header />
          <Routes>
            <Route path="/" exact element={<Books />} />
            <Route path="/categories" exact element={<Categories />} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
}

export default App;
