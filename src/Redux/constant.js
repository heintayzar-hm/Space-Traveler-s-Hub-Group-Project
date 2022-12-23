const FETCH_ROCKET = 'spaceTravelers/rockets/FETCH_ROCKET';
const RESERVE_ROCKET = 'spaceTravelers/rockets/RESERVE_ROCKET';

const rocketApiUrl = process.env.REACT_APP_ROCKET_API;
const apiState = ['/fulfilled', '/pending', '/rejected'];

export {
  FETCH_ROCKET,
  RESERVE_ROCKET,
  rocketApiUrl,
  apiState,
};
