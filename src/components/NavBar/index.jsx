import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand bg-body-secondary">
      <div className="container-fluid">
          <ul className="navbar-nav ms-auto mb-3">
            <li className="nav-item">
              <NavLink className="nav-NavLink" to="">
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
    </nav>
  );
}

export default NavBar;