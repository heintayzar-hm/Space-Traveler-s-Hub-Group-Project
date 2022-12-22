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
    <table className="wrapper mt-10">
      <thead>
        <tr>
          <th className="font-important">Mission</th>
          <th className="description font-important">Description</th>
          <th className="font-important">Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((item) => (
          <tr key={item.id} className="tr-row">
            <td className="mission-name font-normal">{item.name}</td>
            <td className="font-normal">{item.description}</td>
            <td>
              {item.reserved ? (
                <span className="member font-normal">ACTIVE MEMBER</span>
              ) : (
                <span className="inactive font-normal">NOT A MEMBER</span>
              )}
            </td>
            <td>
              {!item.reserved && (
                <button
                  type="button"
                  onClick={clickHandler}
                  id={item.id}
                  className="join-btn font-normal"
                >
                  Join Mission
                </button>
              )}
              {item.reserved && (
                <button
                  type="button"
                  onClick={clickHandler}
                  id={item.id}
                  className="leave-btn font-normal"
                >
                  Leave Mission
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
