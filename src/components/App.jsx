import { getRates } from 'api/api';
import { useState, useEffect } from 'react';
import { Convertor } from './Convertor/Convertor';
import { Header } from './Header/Header';

export const App = () => {
  const [firstAmount, setFirstAmount] = useState('');
  const [secondAmount, setSecondAmount] = useState('');

  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('UAH');

  const [rates, setRates] = useState([]);

  useEffect(() => {
    getRates().then(response => setRates(response.results));
  }, []);

  function format(number) {
    return number.toFixed(2);
  }

  const ratesKeys = Object.keys(rates);

  const filteredRates = ratesKeys.filter(
    el => el === 'UAH' || el === 'USD' || el === 'EUR'
  );

  function handlerFirstAmountChange(firstAmount) {
    setSecondAmount(
      format((firstAmount * rates[secondCurrency]) / rates[firstCurrency])
    );
    setFirstAmount(firstAmount);
  }

  function handlerFirstCurrencyChange(firstCurrency) {
    setSecondAmount(
      format((firstAmount * rates[secondCurrency]) / rates[firstCurrency])
    );
    setFirstCurrency(firstCurrency);
  }

  function handlerSecondAmountChange(secondAmount) {
    setFirstAmount(
      format((secondAmount * rates[firstCurrency]) / rates[secondCurrency])
    );
    setSecondAmount(secondAmount);
  }

  function handlerSecondCurrencyChange(secondCurrency) {
    setFirstAmount(
      format((secondAmount * rates[firstCurrency]) / rates[secondCurrency])
    );
    setSecondCurrency(secondCurrency);
  }

  return (
    <>
      <div className="container convertorContainer">
        <Header />
        <Convertor
          onAmountChange={handlerFirstAmountChange}
          onCurrencyChange={handlerFirstCurrencyChange}
          currencies={filteredRates}
          amount={firstAmount}
          currency={firstCurrency}
        />
        <Convertor
          onAmountChange={handlerSecondAmountChange}
          onCurrencyChange={handlerSecondCurrencyChange}
          currencies={filteredRates}
          amount={secondAmount}
          currency={secondCurrency}
        />
      </div>
    </>
  );
};
