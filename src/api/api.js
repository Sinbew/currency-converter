const PRIVATBANK_KEY =
  'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

export const getActualCurr = () => {
  return fetch(PRIVATBANK_KEY)
    .then(response => response.json())
    .catch(error => console.log('error', error));
};

const FASTFOREX_KEY = '2664547204-d7251cb918-rhgxlb';

export const getRates = () => {
  return fetch(`https://api.fastforex.io/fetch-all?api_key=${FASTFOREX_KEY}`)
    .then(response => response.json())
    .catch(error => console.log(error));
};
