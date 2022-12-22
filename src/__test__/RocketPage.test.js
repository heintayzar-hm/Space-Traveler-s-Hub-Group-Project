import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../Components/Pages/RocketsPage';
import store from '../Redux/configureStore';

describe('Renders correctly', () => {
  it('Renders page correctly', () => {
    const { container } = render(<Provider store={store}><Rockets /></Provider>);
    expect(container).toMatchSnapshot();
  });
});
