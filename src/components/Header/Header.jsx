import { getActualCurr } from 'api/api';
import { useEffect, useState } from 'react';

import styles from './Header.module.css';

export const Header = () => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    getActualCurr().then(res => setCurrency(res));
  }, []);

  function format(number) {
    return number.toFixed(2);
  }

  return (
    <header className={styles.header}>
      <h1>Currency rates</h1>
      <ul className={styles.ratesList}>
        {currency.slice(0, 2).map((el, i) => {
          return (
            <li className={styles.listItem} key={i}>
              <h3 className={styles.title}>{el.ccy}</h3>
              <p>
                Sell: <span>{format(Number(el.sale))}</span>
              </p>
              <p>
                Buy: <span>{format(Number(el.buy))}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
