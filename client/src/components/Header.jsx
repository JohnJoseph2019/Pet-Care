import React from "react";
import {Link} from "react-router-dom";

export default function Header(props) {
  console.log(props.currenUser);
  return (
    <div>
      <div className='header title'>PetCare</div>
      {props.currentUser ? (
        <>
          {props.currentUser.username}
          <button>Log Out</button>
        </>
      ) : (
        <Link to='/user/login'>Login/Register</Link>
      )}
      <hr />
    </div>
  );
}
