import React from "react";
import "./Pet.css";

export default function Pet(props) {
  console.log(props);
  return (
    <div className='PetOuterContainer'>
      <div className='PetImage'>{props.img_url}</div>
      <div className='PetNames'>{props.name}</div>
    </div>
  );
}
