import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateReserve } from '../Redux/rockets/RocketReducer';

const RocketItem = (props) => {
  const { rocket } = props;
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(updateReserve(rocket.id));
  };

  return (
    <li className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <div>
        <img src={rocket.image} alt={`rocket-${rocket.id}`} />
      </div>
      <div className="flex flex-col gap-3 justify-items-start">
        <h2 className="text-2xl font-bold font-important">{rocket.name}</h2>

        <p className="inline">
          <span className={rocket.reserved ? 'bg-blue-400 text-white float-left p-1 rounded m-1' : 'hidden'}>Reserved</span>
          <span className="text-base font-normal">
            {rocket.description}
          </span>
        </p>
        <div className="text-base font-normal">
          { (!rocket.reserved) && <button onClick={clickHandler} type="button" className="bg-blue-600 text-white p-2 rounded hover:bg-white hover:text-blue-600">Reserve Rocket</button>}
          {(rocket.reserved) && <button onClick={clickHandler} type="button" className="bg-white text-blue-400 p-2 rounded hover:bg-black hover:text-blue-500 border-2 border-double border-blue-500">Cancel Reservation</button>}
        </div>
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    name: PropTypes.string,
    reserved: PropTypes.bool,
    image: PropTypes.string,
  }).isRequired,
};

export default RocketItem;
