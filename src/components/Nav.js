import React from 'react';
import {Link} from "react-scroll";
import './Nav.css';
import logo from '../logo.png';

const Nav = () => {
  return (
    <nav className="nav"
         id="navbar">
       <a className='brand'>
         <img
           src={logo}
           className="brand-logo"
           href="#"
           alt="Logo"
         />
         <span>webworks</span>
       </a>
       <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item fancy-underline">
              <Link
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Works
              </Link>
            </li>
            <li className="nav-item fancy-underline">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
       </div>
    </nav>
  );
}
export default Nav;
