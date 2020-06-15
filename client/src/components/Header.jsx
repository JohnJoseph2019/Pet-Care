import React from 'react';
import './Header.css';
import NavBar from '../shared/NavBar';

export default function Header(props) {
  const { currentUser } = props;
  // console.log(currentUser);
  // console.log('header', props);
  return (
    <div className='headerOutDiv'>
      <div className={currentUser ? 'headerTitle userNav' : 'headerTitle'}>PET CARE</div>
      {currentUser ? <NavBar handleLogout={props.handleLogout} currentUser={currentUser} /> : ''}
    </div>
  );
}
