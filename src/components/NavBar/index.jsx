import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Projects">
                Projects 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;