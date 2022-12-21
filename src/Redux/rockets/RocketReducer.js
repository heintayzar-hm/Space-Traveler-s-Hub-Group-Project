// import
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Actions
import {
  FETCH_ROCKET, RESERVE_ROCKET, apiState, rocketApiUrl,
} from '../constant';
//
// eslint-disable-next-line no-unused-vars
const [success, waiting, fail] = apiState;
const initialState = [];

// handle functions
const handleReserveRocket = (state, payload) => {
  const newState = state.map((rocket) => {
    if (rocket.id !== payload) return rocket;
    return { ...rocket, reserved: !rocket.reserved };
  });
  return newState;
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKET + success:
      return action.payload;
    case RESERVE_ROCKET:
      return handleReserveRocket(state, action.payload);
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

const updateReserve = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export {
  fetchRockets,
  updateReserve,
};
