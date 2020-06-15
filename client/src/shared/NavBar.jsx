import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import './NavBar.css';

export default function NavBar(props) {
  console.log('In header ', props);
  const { currentUser } = props;
  return (
    <nav className='navHeader'>
      {currentUser.isSitter === false ? (
        <>
          <NavLink className='linkHeader' to='/appointments/new'>
            New Appointment
          </NavLink>
          <NavLink className='linkHeader' to='/add-pet'>
            Add Pet
          </NavLink>
          <NavLink className='linkHeader' to='/pets'>
            Show Pets
          </NavLink>
        </>
      ) : (
        <>
          <NavLink className='linkHeader' to='/sitterAppointments'>
            My Appointments
          </NavLink>
          <NavLink className='linkHeader' to='/sitter'>
            Available Appointments
          </NavLink>
        </>
      )}
      <NavLink
        className='linkHeader'
        to='#'
        onClick={() => {
          props.handleLogout();
          return <Redirect to='/' />;
        }}>
        Log Out
      </NavLink>
    </nav>
  );
}
