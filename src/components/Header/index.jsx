import React from 'react';
import './style.css';

function Header(props) {
  return (
    <div>
      <h1 className="header-title">
        {props.children}
      </h1>
    </div> 
  );
}

export default Header;