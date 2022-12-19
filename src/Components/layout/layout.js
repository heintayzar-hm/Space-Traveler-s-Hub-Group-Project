import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <>
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
