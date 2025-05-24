import { NavLink } from 'react-router-dom';
import NavLinks from './Navlinks';
import { CgMenuRightAlt } from 'react-icons/cg';

const Navbar = () => {
  return (
    <nav className="bg-base-300">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* LOGO */}
          <NavLink to="/" className="hidden lg:flex btn btn-primary rounded-lg text-3xl items-center">
            ST
          </NavLink>
          {/* DROPDOWN  */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <CgMenuRightAlt className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
