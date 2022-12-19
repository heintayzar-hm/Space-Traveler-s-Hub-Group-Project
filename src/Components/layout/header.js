import { NavLink } from 'react-router-dom';
import Logo from '../../assets/photos/planet.png';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/Rockets',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/Missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/Profile',
      text: 'Profile',
    },
  ];

  return (
    <>
      <nav className=" grid grid-cols-5 p-3">
        <h1 className=" col-span-2 m-auto flex justify-center">
          <NavLink
            to={links[0].path}
            data-testid="link-item"
          >
            <img src={Logo} alt="logo" />
          </NavLink>
        </h1>
        <div className="col-span-3 flex justify-center">
          <ul className="grid grid-cols-3 w-full">
            {links.map((link) => (
              <li key={link.id}>
                {' '}
                <NavLink
                  to={link.path}
                  data-testid="link-item"
                  style={({ isActive }) => ({ opacity: isActive ? 1 : 0.5, textDecoration: isActive ? 'underline' : 'none' })}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
