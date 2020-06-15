import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import './DropDownMenu.css';

export default class DropdownMenu extends Component {
  render() {
    let chosenMenu = [];
    if (this.props.currentUser.isSitter === false) {
      chosenMenu = [
        <NavLink className='dropdown-links' to='/appointments/new'>
          New Appointment
        </NavLink>,
        <NavLink className='dropdown-links' to='/add-pet'>
          Add Pet
        </NavLink>,
        <NavLink className='dropdown-links' to='/pets'>
          Show Pets
        </NavLink>,
        <NavLink
          className='dropdown-links'
          to='#'
          onClick={() => {
            this.props.handleLogout();
            return <Redirect to='/' />;
          }}>
          Log Out
        </NavLink>,
      ];
    } else {
      chosenMenu = [
        <NavLink className='dropdown-links' to='/sitterAppointments'>
          My Appointments
        </NavLink>,
        <NavLink className='dropdown-links' to='/sitter'>
          Available Appointments
        </NavLink>,
        <NavLink
          className='dropdown-links'
          to='#'
          onClick={() => {
            this.props.handleLogout();
            return <Redirect to='/' />;
          }}>
          Log Out
        </NavLink>,
      ];
    }
    return (
      <div className='dropDownMenu'>
        <button className='dropbtn'>
          Menu
          <i className='dropdown-arrow-down'></i>
        </button>
        <div className='dropdown-content'>{chosenMenu.map(tag => tag)}</div>
      </div>
    );
  }
}
