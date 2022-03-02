import React from 'react';
import {Link} from "react-scroll";
import './Nav.css';
import logo from '../images/logo.png';

const Nav = () => {
  return (
    <div className='container-fluid nav'>
      <nav className="navbar"
           id="navbar">
         <a className='brand'
            href='href="https://ocwebworks.com'>
           <img
             src={logo}
             className="brand-logo"
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
                  offset={0}
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
                  offset={0}
                  duration={1000}
                >
                  Contact
                </Link>
              </li>
            </ul>
         </div>
      </nav>
    </div>
  );
}
export default Nav;
