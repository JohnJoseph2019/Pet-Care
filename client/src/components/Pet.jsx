import React from "react";
import "./Pet.css";

export default function Pet(props) {
  console.log(props);
  return (
    <div className='petOuterContainer'>
      <div className='petImage'>{props.img_url}</div>
      <div className='petName'>{props.name}</div>
    </div>
  );
}
