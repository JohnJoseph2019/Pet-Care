import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  console.log(props.currenUser);
  return (
    <div className='header-outDiv'>
      <div className='headerTitle'>PET CARE</div>
      {props.currentUser ? (
        <>
          {props.currentUser.username}
          <button onClick={props.handleLogout}>Log Out</button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
