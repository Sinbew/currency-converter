// const KEY = '1Sn0w9EUSEnDW0rdolCKdWxRjJ91mHs2';
const privat =
  'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

export const getActualCurr = () => {
  return fetch(privat)
    .then(response => response.json())
    .catch(error => console.log('error', error));
};

const base = 'USD';
const myHeaders = new Headers();
myHeaders.append('apikey', '1Sn0w9EUSEnDW0rdolCKdWxRjJ91mHs2');

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export const getCurr = () => {
  return fetch(
    `https://api.apilayer.com/exchangerates_data/latest?&base=${base}`,
    requestOptions
  )
    .then(response => response.json())

    .catch(error => console.log('error', error));
};
