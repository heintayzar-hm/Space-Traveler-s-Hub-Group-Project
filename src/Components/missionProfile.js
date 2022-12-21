import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const missions = useSelector((state) => state.missionReducer);
  const reservedMissions = missions.filter(
    (mission) => mission.reserved === true,
  );
  return (
    <div className="">
      <h2 className="text-2xl font-bold font-important">My Missions</h2>
      <div>
        <ul className="grid grid-cols-1 my-4 mx-2">
          {reservedMissions.map((mission) => <li className="p-5 text-base font-normal border-brown-200 border" key={mission.id}>{mission.name}</li>)}
        </ul>
      </div>
    </div>
  );
};
export default MissionProfile;
