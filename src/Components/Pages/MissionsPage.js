import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../App.css';
import { fetchMissions, reserveMission } from '../../Redux/mission/mission';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions.length]);
  const clickHandler = (event) => {
    dispatch(reserveMission(event.target.id));
  };

  return (
    <table className="wrapper">
      <thead>
        <tr>
          <th>Mission</th>
          <th className="description">Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((item) => (
          <tr key={item.id} className="tr-row">
            <td className="mission-name">{item.name}</td>
            <td>{item.description}</td>
            <td>
              {item.reserved ? (
                <button type="button" className="member">ACTIVE MEMBER</button>
              ) : (
                <button type="button" className="inactive">NOT A MEMBER</button>
              )}
            </td>
            <td>
              {!item.reserved && (
                <button
                  type="button"
                  onClick={clickHandler}
                  id={item.id}
                  className="join-btn"
                >
                  Join Mission
                </button>
              )}
              {item.reserved && (
                <button
                  type="button"
                  onClick={clickHandler}
                  id={item.id}
                  className="leave-btn"
                >
                  Leave Mission
                </button>
              )}
            </td>
          </tr>
        ))}
        ;
      </tbody>
    </table>
  );
};

export default Missions;
