import React, { Component } from 'react';
import Select from 'react-select';
import './NewAppointments.css';

export default class Appointments extends Component {
  render() {
    const { start_date, end_date, restriction_note } = this.props.appointmentData;
    const {
      appointmentHandleChange,
      handleSelected,
      pets,
      history,
      createAppointment,
      petId,
    } = this.props;
    const today = new Date();
    const date = `${today.getFullYear()}-0${
      today.getMonth() + 1
    }-${today.getDate()}T${today.getHours()}:${today.getMinutes()}`;
    console.log(date);
    const options = pets.map(pet => {
      return { value: pet.id, name: 'Pet_id', label: pet.name, key: pet.id };
    });
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
                type='datetime-local'
                id='start_date'
                name='start_date'
                value={date}
                min={date}
                onChange={appointmentHandleChange}
                required
              />
            </label>
            <label className='lableAppointment' htmlFor='end_date'>
              End Date:
              <input
                type='datetime-local'
                id='end_date'
                name='end_date'
                min={date}
                onChange={appointmentHandleChange}
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
            <label className='lableAppointment aaa' htmlFor='petId'>
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
        </form>
      </>
    );
  }
}
