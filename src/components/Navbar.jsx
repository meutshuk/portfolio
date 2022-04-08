import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar--logo">
          <img src={logo} alt="" height="50px" />
      </div>
      <ul className="navbar--links">
        <li className="items">
          <Link to="/">Home</Link>
        </li>
        <li className="items">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="items">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
