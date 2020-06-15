import React, { Component } from 'react';
import Select from 'react-select';
import './NewAppointments.css';

export default class Appointments extends Component {
  //  export const departments = [
  //  { value: 'Meat & Seafood', label: 'Meat & Seafood', name: "department" },
  //  { value: 'Produce', label: 'Produce', name: "department" },
  //  { value: 'Deli', label: 'Deli', name: "department" },
  //  { value: 'Bakery & Dessert', label: 'Bakery & Dessert', name: "department" }
  // ];

  render() {
    console.log(this.props);
    const { start_date, end_date, restriction_note } = this.props.appointmentData;
    const {
      appointmentHandleChange,
      handleSelected,
      pets,
      history,
      createAppointment,
      petId,
    } = this.props;
    const options = pets.map(pet => {
      return { value: pet.id, name: 'Pet_id', label: pet.name, key: pet.id };
    });

    console.log('ooptiones', options);
    console.log('NEW APPOINTMENT PET ID', petId);

    return (
      <>
        <div className='appointmentTitle'>New Appointment</div>

        <form
          className='appointmentOuterDiv'
          onSubmit={event => {
            event.preventDefault();
            createAppointment();
            history.push(`/pets/${petId}`);
          }}>
          <div className='appointmentInnerDiv'>
            <label className='lableAppointment' htmlFor='start_date'>
              Start Date:
              <input
                required
                type='text'
                name='start_date'
                value={start_date}
                id='start_date '
                placeholder='YYYY/MM/DD'
                onChange={appointmentHandleChange}
                className='appointmentInput'
              />
            </label>
            <label className='lableAppointment' htmlFor='end_date'>
              End Date:
              <input
                required
                type='text'
                name='end_date'
                value={end_date}
                id='start_date '
                placeholder='YYYY/MM/DD'
                onChange={appointmentHandleChange}
                className='appointmentInput'
              />
            </label>
            <label className='lableAppointment' htmlFor='restriction_note'>
              Restrictions:
              <input
                required
                type='text'
                name='restriction_note'
                value={restriction_note}
                id='start_date '
                placeholder='...'
                onChange={appointmentHandleChange}
                className='appointmentInput'
              />
            </label>
            <label className='lableAppointment' htmlFor='petId'>
              Pet:
              <Select
                key='1'
                className='selectPet'
                placeholder='Pets'
                options={options}
                onChange={handleSelected}
              />
            </label>
            <button type='submit' className='appointmentButton'>
              Submit
            </button>
          </div>
          {/* {this.renderError()} */}
        </form>
      </>
    );
  }
}
