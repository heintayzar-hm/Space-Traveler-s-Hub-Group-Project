import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Profile from '../Components/Pages/Profile';
import store from '../Redux/configureStore';

describe('Renders correctly', () => {
  it('Renders page correctly', () => {
    const { container } = render(<Provider store={store}><Profile /></Provider>);
    expect(container).toMatchSnapshot();
  });
});
