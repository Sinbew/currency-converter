import { getCurr } from 'api/api';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './Convertor.module.css';

export const Convertor = () => {
  const [firstCurrency, setFirstCurrency] = useState('');
  const [secondCurrency, setSecondCurrency] = useState('');

  const [currency, setCurrency] = useState([]);

  console.log(currency);
  // useEffect(() => {
  //   getCurr().then(data =>
  //     setCurrency([data.base, ...Object.keys(data.rates)])
  //   );
  // }, []);

  console.log(currency);
  return (
    <div className="container convertorContainer">
      <div className={styles.convertorWrapper}>
        <div className={styles.inputWrapper}>
          <input type="number" />
          {/* <select>
            {currency?.map(el => {
              return <option value={el}>{el}</option>;
            })}
          </select> */}
        </div>
        <div className={styles.inputWrapper}>
          <input type="number" />
          <select>
            <option value="UAH"></option>
          </select>
        </div>
      </div>
    </div>
  );
};
