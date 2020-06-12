import React from "react";
import "./Header.css";
import NavBar from "../shared/NavBar";
import { Redirect } from "react-router-dom";

export default function Header(props) {
  const { currentUser } = props;
  console.log(currentUser);
  return (
    <div className='header-outDiv'>
      <div className={currentUser ? "headerTitle userNav" : "headerTitle"}>
        PET CARE
      </div>
      {currentUser ? (
        <NavBar handleLogout={props.handleLogout} />
      ) : (
        <Redirect to='/user/login' />
      )}
    </div>
  );
}
