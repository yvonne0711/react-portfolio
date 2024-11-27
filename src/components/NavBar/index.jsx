import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand">
      <div className="navbar-container">
        <div className="name-title">Yvonne Wong</div>
        <ul className="navbar-nav nav-buttons">
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
