import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div className="pt-3">
      {!(reservedRockets.length === 0) ? (
        <>
          <h2 className="text-2xl font-bold font-important">My Rockets</h2>
        </>
      )
        : (
          <>
            <h2 className="text-xl font-semibold font-important">No Rockets yet.</h2>

          </>
        )}
      <ul className="grid grid-cols-1 my-4 mx-2">
        {reservedRockets.map((rocket) => (<li key={rocket.id} className="p-5 text-base font-normal border-brown-200 border">{rocket.name}</li>))}
      </ul>

    </div>
  );
};

export default RocketProfile;
