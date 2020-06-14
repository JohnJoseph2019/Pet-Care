import React from 'react';
import './PetEdit.css';

export default function PetEdit(props) {
  console.log('aaaaaaa', props.petData);
  const { name, breed, pet_type, age, img_url } = props.petData;

  return (
    <div>
      <>
        <form
          className='petEditForm'
          onSubmit={e => {
            e.preventDefault();
            props.editSubmit(props.petId);
          }}>
          <div className='petEditImg'>
            <img id='img' className='petDetailImage' src={img_url} alt={pet_type} />
            <label className='LabelDetailLabel' htmlFor='img_url'>
              Image Link:
              <input
                id='img_url'
                className='LabelDetail'
                type='text'
                name='img_url'
                value={img_url}
                onChange={props.handleChange}
              />
            </label>
          </div>
          <div className='petInfoDetail'>
            <label className='LabelDetailLabel' htmlFor='name'>
              Name:
              <input
                id='name'
                className='LabelDetail'
                type='text'
                name='name'
                value={name}
                onChange={props.handleChange}
              />
            </label>
            <label className='LabelDetailLabel' htmlFor='age'>
              Age:
              <input
                id='age'
                className='LabelDetail'
                type='number'
                name='age'
                value={age}
                onChange={props.handleChange}
              />
            </label>
            <label className='LabelDetailLabel' htmlFor='breed'>
              Breed:
              <input
                id='breed'
                className='LabelDetail'
                type='text'
                name='breed'
                value={breed}
                onChange={props.handleChange}
              />
            </label>
            <label className='LabelDetailLabel' htmlFor='pet_type'>
              Type:
              <input
                id='pet_type'
                className='LabelDetail'
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
    </div>
  );
}
