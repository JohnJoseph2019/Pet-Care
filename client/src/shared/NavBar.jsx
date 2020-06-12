import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(props) {
  return (
    <nav className='navHeader'>
      <NavLink className='linkHeader' to='/'>
        Add Pet
      </NavLink>
      <NavLink className='linkHeader' to='/'>
        Show Sitter
      </NavLink>
      <NavLink className='linkHeader' to='#' onClick={props.handleLogout}>
        Log Out
      </NavLink>
    </nav>
  );
}
