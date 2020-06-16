import React, { Component } from 'react';
import './PetDetail.css';

export default class PetDetail extends Component {
  render() {
    const { currentPet } = this.props;
    return (
      <>
        {currentPet && (
          <div className='petDetail'>
            <img
              id='img'
              className='petDetailImage'
              src={currentPet.img_url}
              alt={currentPet.pet_type}
            />
            <div className='items-details'>
              <div className='LabelDetailLabel'>Name:</div>
              <div className='LabelDetail'>{currentPet.name}</div>
              <div className='LabelDetailLabel'>Age:</div>
              <div className='LabelDetail'>{currentPet.age}</div>
              <div className='LabelDetailLabel'>Breed:</div>
              <div className='LabelDetail'>{currentPet.breed}</div>
              <div className='LabelDetailLabel'>Type:</div>
              <div className='LabelDetail'>{currentPet.pet_type}</div>
              <div className='buttonsDetails'>
                <button
                  className='deleteButton'
                  onClick={() => {
                    this.props.setPetEdit(currentPet);
                    this.props.history.push(`/pets/${currentPet.id}/edit`);
                  }}>
                  edit
                </button>
                <button
                  className='deleteButton'
                  onClick={() => {
                    this.props.removePet(currentPet.id);
                    this.props.history.push('/pets');
                  }}>
                  delete
                </button>
                <button
                  className='petAppointmentButton'
                  onClick={() => {
                    this.props.getAllPetsAppointments(currentPet.id);
                    this.props.history.push(`/pets/${currentPet.id}/appointments`);
                  }}>
                  Appointments
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
