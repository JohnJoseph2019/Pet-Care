import React from 'react';
import './Pet.css';

export default function Pet(props) {
  // console.log(props);
  return (
    <div className='petOuterContainer'>
      {/* <div
        className='petImage'
        style={{ backgroundImage: `url(${props.img_url})` }}
        alt={props.pet_type}
      ></div> */}
      <img className='petImage' src={props.img_url} alt={props.pet_type} />
      <div className='petName'>{props.name}</div>
    </div>
  );
}
