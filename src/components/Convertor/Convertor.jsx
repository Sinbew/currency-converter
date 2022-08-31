import PropTypes from 'prop-types';

import styles from './Convertor.module.css';

export const Convertor = props => {
  return (
    <div className={styles.wrapper}>
      <input
        type="number"
        value={props.amount}
        onChange={evt => props.onAmountChange(evt.target.value)}
      />
      <div className={styles.select}>
        <select
          value={props.currency}
          onChange={evt => props.onCurrencyChange(evt.target.value)}
        >
          {props.currencies?.map((currency, i) => (
            <option key={i} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

Convertor.propTypes = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};
