const FETCH_ROCKET = 'spaceTravelersHub/rockets/FETCH_ROCKET';
const BOOK_ROCKET = 'spaceTravelersHub/rockets/BOOK_ROCKET';

const rocketApiUrl = process.env.REACT_APP_ROCKET_API;
const apiState = ['/fulfilled', '/pending', '/rejected'];

export {
  FETCH_ROCKET,
  BOOK_ROCKET,
  rocketApiUrl,
  apiState,
};
