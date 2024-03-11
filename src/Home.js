import React from 'react';
import { json, checkStatus } from './utils';

class CurrencyRates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseCurrency: 'USD',
      rates: '',
      error: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch(`https://api.frankfurter.app/latest?from=USD`).then(checkStatus).then(json).then((data) => {
      this.setState({ rates : data.rates });
    }).catch((error) => {
      this.setState({ error : error.message });
      console.log(error);
    })
  }

  handleChange(event) {
    const input = event.target.value;
    this.setState({ baseCurrency : input }, () => {
      fetch(`https://api.frankfurter.app/latest?from=${input}`).then(checkStatus).then(json).then((data) => {
        this.setState({ rates : data.rates });
      }).catch((error) => {
        this.setState({ error : error.message});
        console.log(error);
      })
    })
  }

  render() {
    const { baseCurrency, rates } = this.state;
    console.log(rates);
    const ratesArr = Object.entries(rates);
    const ratesElements = ratesArr.map(rate => <div className='col-1 text-left font-monospace'> {rate[0]}&nbsp;:&nbsp;{rate[1]}</div>);

    return (
      <div className='container'>
        <div className='text-center p-3 mb-2'>
          <h2 className='mb-2'>Exchange Rates</h2>
        </div>
        <div className='row text-center'>
          <div className='col-12'>
            <span>Base Currency: </span>
            <select name='baseCurrency' defaultValue='USD' onChange={this.handleChange}>
            <option value="AUD">AUD</option>
              <option value="BGN">BGN</option>
              <option value="BRL">BRL</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CNY">CHY</option>
              <option value="CZK">CZK</option>
              <option value="DKK">DKK</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="HKD">HKD</option>
              <option value="HRK">HRK</option>
              <option value="HUF">HUF</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="INR">INR</option>
              <option value="ISK">ISK</option>
              <option value="JPY">JPY</option>
              <option value="KRW">KRW</option>
              <option value="MXN">MXN</option>
              <option value="MYR">MYR</option>
              <option value="NOK">NOK</option>
              <option value="NZD">NZD</option>
              <option value="PHP">PHP</option>
              <option value="PLN">PLN</option>
              <option value="RON">RON</option>
              <option value="RUB">RUB</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
              <option value="TRY">TRY</option>
              <option value="USD">USD</option>
              <option value="ZAR">ZAR</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='col'></div>
          <div className='col-1'>
            <br />
            {ratesElements}
          </div>
          <div className='col'></div>
        </div>
        <footer>
          <div class="row bg-light">
            <div class="col fixed-bottom bg-light text-center">
              <a className='footer-link' href="https://earnest-sorbet-b49b4e.netlify.app/">Portfolio</a>
              <span> | </span>
              <a className='footer-link' href="https://github.com/PMorehead">GitHub</a>
              <span> | </span>
              <a className='footer-link' href="mailto:patrick.a.morehead@gmail.com">Email</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default CurrencyRates;