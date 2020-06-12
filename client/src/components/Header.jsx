import React from "react";
import "./Header.css";
import NavBar from "../shared/NavBar";

export default function Header(props) {
  const { currentUser } = props;
  // console.log(currentUser);
  return (
    <div className='header-outDiv'>
      <div className={currentUser ? "headerTitle userNav" : "headerTitle"}>
        PET CARE
      </div>
      {currentUser ? <NavBar handleLogout={props.handleLogout} /> : ""}
    </div>
  );
}
