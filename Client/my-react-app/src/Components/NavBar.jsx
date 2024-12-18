import React from 'react';
import '../styles/NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-left">
        <li><NavLink to="/">Home</NavLink></li>  {/* Change "#" to "/" */}
      </ul>
      <ul className="nav-right">
        <li><NavLink to="/view-expense">View Expenses</NavLink></li>
        <li><NavLink to="/add-expense">Add Expenses</NavLink></li> {/* Example of a valid route */}
        <li><NavLink to="/contact">Contact Us</NavLink></li>  {/* Example of a valid route */}
      </ul>
    </nav>
  );
}

export default NavBar;
