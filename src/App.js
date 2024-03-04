import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import'./App.css';
import CurrencyConverter from './CurrencyConverter';

const Home = () => {
  return <h2>Home</h2>;
}

const NotFound = () => {
  return <h2>404 Not Found</h2>
}
const App = () => {
  return (
    <Router>
      <div className="container">
        <h2>Currency Converter</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/CurrencyConverter/">Currency Converter</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/CurrencyConverter" element={<CurrencyConverter />} />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  
  )
}

export default App;
