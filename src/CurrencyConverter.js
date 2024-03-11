import React from 'react';
import { json, checkStatus} from './utils.js';

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 0.89,
      cur1: 'USD',
      amount1: 1,
      cur2: 'EUR',
      amount2: 1 * 0.89,
      error: ''
    };

    this.handleChangeCur1 = this.handleChangeCur1.bind(this);
    this.handleChangeCur2 = this.handleChangeCur2.bind(this);
    this.handleChangeAmount1 = this.handleChangeAmount1.bind(this);
    this.handleChangeAmount2 = this.handleChangeAmount2.bind(this);

  }

  toCur1(amount, rate) {
    return amount * (1 / rate);
  }

  toCur2(amount, rate) {
    return amount * rate;
  }


  handleChangeAmount1(event) {
    const input = parseFloat(event.target.value);
    if(Number.isNaN(input)) {
      this.setState({
        amount1: '',
        amount2: '',
      });

      return;
    }

    this.updateAmount2(input);
  }

  updateAmount2(amount1) {
    const amount2 = this.toCur2(amount1, this.state.rate).toFixed(3);
    this.setState({
      amount1,
      amount2
    });
  }

  handleChangeAmount2(event) {
    const input = parseFloat(event.target.value);
    if (Number.isNaN(input)) {
      this.setState({
        amount1: '',
        amount2: ''
      });

      return;
    }
    this.updateAmount1(input);
  }

  updateAmount1(amount2) {
    const amount1 = this.toCur1(amount2, this.state.rate).toFixed(3);
    this.setState({
      amount1,
      amount2
    });
  }

  handleChangeCur1(event) {
    const input = event.target.value;
    this.setState({ cur1 : input }, () =>{
      fetch(`https://api.frankfurter.app/latest?from=${this.state.cur1}&to=${this.state.cur2}`).then(checkStatus).then(json).then((data) => {

        this.setState({
          rate: data.rates[this.state.cur2]
        }, () => {
          this.updateAmount2(this.state.amount1);
        })
      })
      .catch((error) => {
        this.setState({ error: error.message });
        console.log(error);
      })
    });
  }

  handleChangeCur2(event) {
    const input = event.target.value;
    this.setState({ cur2: input }, () => {
      fetch(`https://api.frankfurter.app/latest?from=${this.state.cur1}&to=${this.state.cur2}`).then(checkStatus).then(json).then((data) => {

        this.setState({
          rate: data.rates[this.state.cur2]
        }, () => {
          this.updateAmount1(this.state.amount2);
        })
      })
      .catch((error) => {
        this.setState({ error: error.message });
        console.log(error);
      })
    });
  }

  render() {
    const { rate, cur1, amount1, cur2, amount2 } = this.state;

    return (
      <div className="container">
        <div className="text-center p-3 mb-2">
          <h2 className="mb-2">Currency Converter</h2>
          <h4>{cur1} 1 : {rate} {cur2}</h4>
        </div>
        <div className="row text-center">
          <div className="col-12">
            <select name="cur1" className='m-2' defaultValue="USD" onChange={this.handleChangeCur1}>
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
            <input value={amount1} onChange={this.handleChangeAmount1} type="number" name="currency1" />
            <span className="mx-3">=</span>
            <input value={amount2} onChange={this.handleChangeAmount2} type="number" name="currency2" />
            <select className='m-2' name="cur2" defaultValue="EUR" onChange={this.handleChangeCur2}>
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
      </div>
    )
  }
}

export default CurrencyConverter;