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
    <div className="container">
      <header className={styles.header}>
        <h1>Currency rates</h1>
        <ul className={styles.ratesList}>
          {currency.slice(0, 2).map((el, i) => {
            return (
              <li className={styles.listItem} key={i}>
                <h3>{el.ccy}</h3>
                <p>Купівля: {format(Number(el.buy))}</p>
                <p>Продаж: {format(Number(el.sale))}</p>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
};
