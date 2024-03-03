import convert from './utils.js';

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 0.89,
      cur1: 1,
      cur2: 1 * 0.89,
    };

    this.handleChangeFirst = this.handleChangeFirst.bind.this;
    this.handleChangeSecond = this.handleChangeSecond.bind.this;

  }

  handleChangeFirst(event) {
    if(Number.isNaN(input)) {
      this.setState({
        cur1: '',
        cur2: '',
      });

      return;
    }
  }

  render() {
    const { rate, cur1, cur2 } = this.state;

    return (
      <div className="container">
        <div className="text-center p-3 mb-2">
          <h2 className="mb-2">Currency Converter</h2>
          <h4>USD 1 : {rate} EURO</h4>
        </div>
        <div className="row text-center">
          <div className="col-12">
            <span className="mr-1">USD</span>
            <input value={cur1} onChange={this.handleChangeFirst} type="number" />
            <span className="mx-3">=</span>
            <input value={cur2} onChange={this.handleChangeSecond} type="number" />
            <span className="ml-1">EURO</span>
          </div>
        </div>
      </div>
    )
  }
}