import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../Components/Pages/MissionsPage';
import store from '../Redux/configureStore';

describe('Renders correctly', () => {
  it('Renders page correctly', () => {
    const { container } = render(<Provider store={store}><Missions /></Provider>);
    expect(container).toMatchSnapshot();
  });
});
