import React, { Component } from 'react';
import Select from 'react-select';
import './NewAppointments.css';

export default class NewAppointments extends Component {
  state = {
    restriction_note: '',
    accepted: false,
    start_date: '',
    end_date: '',
    isError: false,
    errorMsg: '',
    Pet_id: null,
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      isError: false,
      errorMsg: '',
    });
  };
  render() {
    const {
      appointmentHandleChange,
      handleSelected,
      pets,
      history,
      createAppointment,
      petId,
    } = this.props;
    const today = new Date();
    const date = `${today.getFullYear()}-${
      today.getMonth() + 1 > 10 ? today.getMonth() + 1 : '0' + (today.getMonth() + 1)
    }-${today.getDate() > 10 ? today.getDate() : '0' + today.getDate()}`;
    const time = `T${today.getHours() > 10 ? today.getHours() : '0' + today.getHours()}:${
      today.getMinutes() > 10 ? today.getMinutes() : '0' + today.getMinutes()
    }`;
    const dateTime = date + time;
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
                min={dateTime}
                onChange={appointmentHandleChange}
                className='appointmentInput'
                required
              />
            </label>
            <label className='lableAppointment' htmlFor='end_date'>
              End Date:
              <input
                type='datetime-local'
                id='end_date'
                name='end_date'
                min={dateTime}
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
