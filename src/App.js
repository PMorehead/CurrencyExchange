import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import'./App.css';
import CurrencyConverter from './CurrencyConverter';
import CurrencyRates from './Home';


const NotFound = () => {
  return <h2>404 Not Found</h2>
}

const App = () => {
  return (
    <Router>
      <div className="container">
        <h2>Currency Converter</h2>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link className='navbar-brand m-2' to="/">Exchange Rates</Link>
          <Link className='navbar-brand' to="/CurrencyConverter/">Currency Converter</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" exact element={<CurrencyRates />} />
        <Route path="/CurrencyConverter" element={<CurrencyConverter />} />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  
  )
}

export default App;
