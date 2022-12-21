import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const missions = useSelector((state) => state.missionReducer);
  const reservedMissions = missions.filter(
    (mission) => mission.reserved === true,
  );
  return (
    <div className="mission-profile">
      <h2>My Missions</h2>
      <div>
        <ul className="mission-profile-ul">
          {reservedMissions.map((mission) => <li key={mission.id}>{mission.name}</li>)}
        </ul>
      </div>
    </div>
  );
};
export default MissionProfile;
