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
        <div className=" col-span-2 m-auto flex justify-center w-full">

          <div className="flex w-full justify-around">
            <NavLink
              to={links[0].path}
              data-testid="link-item"
              className=""
            >
              <img src={Logo} alt="logo" />
            </NavLink>
            <NavLink
              to={links[0].path}
              data-testid="link-item"
              className=""
            >
              <h1 className="md:text-2xl hover:text-blue-600 hidden sm:block text-xl font-bold font-italics">Space Travelers Hub</h1>

            </NavLink>
          </div>
        </div>
        <div className="col-span-3 flex justify-center">
          <ul className="grid grid-cols-3 w-full">
            {links.map((link) => (
              <li key={link.id} className="font-normal text-base hover:text-blue-600">
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
