import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer>
      <h1 className="footer-title">Let's keep in touch</h1>
      <div className="footer-btns">
        <a href="mailto: yvonnewong1107@gmail.com" className="btn btn-contact" target="_blank"><i className="fa fa-envelope"></i></a>
        <a href="https://github.com/yvonne0711" className="btn btn-contact" target="_blank"><i className="fa fa-github"></i></a>
        <a href="https://www.linkedin.com/in/yvonnewong1107/" className="btn btn-contact" target="_blank"><i className="fa fa-linkedin-square"></i></a>
      </div>
    </footer>
  );
}

export default Footer;