import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className='header title'>PetCare</div>
      <Link to='/user/login'>Login/Register</Link>
      <hr />
    </div>
  );
}
