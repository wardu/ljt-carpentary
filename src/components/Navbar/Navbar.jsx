import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.JPG";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav__logo'>
        <img src={logo} alt='LJT logo' />
      </div>
      <div className='nav__links'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
