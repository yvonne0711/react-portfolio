import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-NavLink" aria-current="page" to="">
                Home 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-NavLink" to="about">
                About 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-NavLink" to="projects">
                Projects 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-NavLink" to="contact">
                Contact 
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;