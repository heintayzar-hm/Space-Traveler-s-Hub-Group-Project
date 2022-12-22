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
      <nav className=" grid grid-cols-5 p-3 items-center border-b border-black">
        <div className=" col-span-2 m-auto flex justify-center w-full">

          <div className="flex w-full justify-start">
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
              className="pl-5"
            >
              <h1 className="md:text-2xl hover:text-blue-600 hidden sm:block text-xl font-bold font-italics">Space Travelers Hub</h1>

            </NavLink>
          </div>
        </div>
        <div className="col-span-3 flex justify-center">
          <ul className="flex justify-end gap-3 w-full">
            {links.map((link) => (
              <li key={link.id} className="font-normal hover:text-black text-base text-blue-600 flex items-center gap-3">
                {' '}
                <NavLink
                  to={link.path}
                  data-testid="link-item"
                  style={({ isActive }) => ({ opacity: isActive ? 1 : 0.5, textDecoration: isActive ? 'underline' : 'none' })}
                >
                  {link.text}
                </NavLink>
                <div className={(link.id === 2) ? 'border border-l bg-slate-400 h-3 w-1' : 'hidden'} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
