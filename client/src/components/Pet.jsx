import React from 'react';
import './Pet.css';
import { Link } from 'react-router-dom';

export default function Pet(props) {
  // console.log(props);
  return (
    <div key={props.id} className='petOuterContainer' to={`/pets/${props.id}`}>
      <Link to={`/pets/${props.id}`}>
        <img className='petImage' src={props.img_url} alt={props.pet_type} />
        <div className='petName'>{props.name}</div>
      </Link>
    </div>
  );
}
