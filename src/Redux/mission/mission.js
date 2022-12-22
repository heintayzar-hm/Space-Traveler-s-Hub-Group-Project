import { createAsyncThunk } from '@reduxjs/toolkit';

const Url = 'https://api.spacexdata.com/v3/missions';

const FETCH_MISSION = 'FETCH_ROCKET';
const RESERVE_MISSION = 'RESERVE_MISSION';

const initialState = [];

const handleReserveMission = (state, payload) => {
  const newState = state.map((mission) => {
    if (mission.id !== payload) return mission;
    return { ...mission, reserved: !mission.reserved };
  });
  return newState;
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_MISSION}/fulfilled`:
      return action.payload;
    case RESERVE_MISSION:
      return handleReserveMission(state, action.payload);
    default:
      return state;
  }
};
export default missionReducer;

const fetchMissions = createAsyncThunk(FETCH_MISSION, async () => {
  const response = await fetch(Url);
  const data = await response.json();
  const missions = data.map((mission) => {
    const name = mission.mission_name;
    const { description } = mission;
    const id = mission.mission_id;
    const reserved = false;
    return {
      id,
      name,
      description,
      reserved,
    };
  });
  return missions;
});

const reserveMission = (payload) => ({
  type: RESERVE_MISSION,
  payload,
});
export { fetchMissions, reserveMission };
