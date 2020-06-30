import React from 'react';
import './PetEdit.css';

export default function PetEdit(props) {
  const { name, breed, pet_type, age, img_url } = props.petData;
  return (
    <>
      <div className='EditTitle'>Edit Pet</div>
      <form
        className='petEditForm'
        onSubmit={e => {
          e.preventDefault();
          props.editSubmit(props.petId);
          props.history.push(`/pets/${props.petId}`);
        }}>
        <div className='petOutertImg'>
          <img id='img' className='petEditImage' src={img_url} alt={pet_type} />
          <label className='petEditLabel' htmlFor='img_url'>
            Image Link:
            <input
              id='img_url'
              className='petInput'
              type='text'
              name='img_url'
              value={img_url}
              onChange={props.handleChange}
            />
          </label>
        </div>
        <div className='petInfoDetail'>
          <label className='petEditLabel' htmlFor='name'>
            Name:
            <input
              id='name'
              className='petInput'
              type='text'
              name='name'
              value={name}
              onChange={props.handleChange}
            />
          </label>
          <label className='petEditLabel' htmlFor='age'>
            Age:
            <input
              id='age'
              className='petInput'
              type='number'
              name='age'
              value={age}
              onChange={props.handleChange}
            />
          </label>
          <label className='petEditLabel' htmlFor='breed'>
            Breed:
            <input
              id='breed'
              className='petInput'
              type='text'
              name='breed'
              value={breed}
              onChange={props.handleChange}
            />
          </label>
          <label className='petEditLabel' htmlFor='pet_type'>
            Type:
            <input
              id='pet_type'
              className='petInput'
              type='text'
              name='pet_type'
              value={pet_type}
              onChange={props.handleChange}
            />
          </label>
          <button className='editButton'>Save</button>
        </div>
      </form>
    </>
  );
}
