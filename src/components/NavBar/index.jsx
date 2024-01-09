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
              <Link className="nav-link" aria-current="page" to="/react-portfolio">
                Home 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/react-portfolio/about">
                About 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/react-portfolio/projects">
                Projects 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/react-portfolio/contact">
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