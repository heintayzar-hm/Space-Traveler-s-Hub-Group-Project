import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../../Redux/rockets/RocketReducer';
import RocketItem from '../RocketItem';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);
  return (
    <main className="p-10">
      <ul className="grid grid-cols-1 gap-4">
        {
      rockets.map((rocket) => (<RocketItem key={rocket.id} rocket={rocket} />))
     }
      </ul>
    </main>
  );
};

export default Rockets;
