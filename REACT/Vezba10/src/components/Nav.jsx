import React from "react";
import { Link } from "react-router-dom";
import './../Styles.css';

const Nav = () => {
  return (
    <ul className="nav-menu"> 
      <li>
        <Link to="/todos" className="nav-link">
          Todos
        </Link>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
    </ul>
  );
};

export default Nav;

