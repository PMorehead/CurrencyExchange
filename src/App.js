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
      <div className="container bg-light text-center">
        <h2 className='d-md-none'>Patrick's Currency Converter</h2>
        <nav className='navbar navbar-expand navbar-light bg-light'>
          <span className='m-1 navbar-brand d-none d-md-inline'>Patrick's Currency Convterter</span>
          <Link className='m-2 nav-link' to="/CurrencyExchange/">Exchange Rates</Link>
          <span> | </span>
          <Link className='m-2 nav-link' to="/CurrencyConverter/">Currency Converter</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/CurrencyExchange" element={<CurrencyRates />} />
        <Route path="/CurrencyConverter" element={<CurrencyConverter />} />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  
  )
}

export default App;
