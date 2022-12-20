// import
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Actions
import {
  FETCH_ROCKET, BOOK_ROCKET, apiState, rocketApiUrl,
} from '../constant';
//
// eslint-disable-next-line no-unused-vars
const [success, waiting, fail] = apiState;
const initialState = [];
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET + success:
      return action.payload;
    case BOOK_ROCKET + success:
      return action.payload;
    default:
      return state;
  }
};

export default rocketsReducer;

// Creators
const fetchRockets = createAsyncThunk(FETCH_ROCKET, async () => {
  const response = await axios.get(rocketApiUrl);
  const rockets = response.data.map((rocket) => {
    const name = rocket.rocket_name;
    const image = rocket.flickr_images[0];
    const reserved = false;
    const {
      id, description,
    } = rocket;
    return {
      id, name, description, image, reserved,
    };
  });
  return (rockets);
});
export {
  fetchRockets,
};
