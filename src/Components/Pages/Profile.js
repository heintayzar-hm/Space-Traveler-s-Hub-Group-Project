import RocketProfile from '../RocketProfile';
import MissionProfile from '../missionProfile';

const Profile = () => (
  <main className="grid sm:grid-cols-2 grid-cols-1">
    <div>
      <MissionProfile />
    </div>
    <div>
      <RocketProfile />
    </div>
  </main>
);
export default Profile;
