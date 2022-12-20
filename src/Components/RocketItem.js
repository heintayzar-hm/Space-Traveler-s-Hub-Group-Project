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
        <p className="text-base font-normal">{rocket.description}</p>
        <div className="text-base font-normal">
          { (!rocket.reserved) && <button onClick={clickHandler} type="button" className="bg-blue-600 text-white p-2 rounded hover:bg-white hover:text-blue-600">Reserve Rocket</button>}
          {(rocket.reserved) && <button onClick={clickHandler} type="button" className="bg-gray-500 text-black p-2 rounded hover:bg-blue-600 hover:text-white">Cancel Reserve Rocket</button>}
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
