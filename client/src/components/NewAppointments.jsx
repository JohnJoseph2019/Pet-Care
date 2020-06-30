import React, { Component } from 'react';
import Select from 'react-select';
import './NewAppointments.css';

export default class NewAppointments extends Component {
  state = {
    restriction_note: '',
    accepted: false,
    start_date: '',
    end_date: '',
    petId: null,
    isError: false,
    errorMsg: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      isError: false,
      errorMsg: '',
    });
  };
  handleSelected = selectedOption => {
    this.setState({
      [selectedOption.name]: selectedOption.value,
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { history, createAppointmentTwo } = this.props;
    const { petId, isError, errorMsg, ...other } = this.state;
    createAppointmentTwo(petId, { ...other })
      .then(() => history.push('/pets'))
      .catch(error => {
        console.error(error);
        this.setState({
          restriction_note: '',
          accepted: false,
          start_date: '',
          end_date: '',
          petId: null,
          isError: true,
          errorMsg: 'Invalid Details',
        });
      });
  };
  renderError = () => {
    const toggleForm = this.state.isError ? 'dangerCreatePet' : 'createPetButton';
    if (this.state.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {this.state.errorMsg}
        </button>
      );
    } else {
      return (
        <button type='submit' className={toggleForm}>
          Add Pet
        </button>
      );
    }
  };
  render() {
    const today = new Date();
    const date = `${today.getFullYear()}-${
      today.getMonth() + 1 > 10 ? today.getMonth() + 1 : '0' + (today.getMonth() + 1)
    }-${today.getDate() > 10 ? today.getDate() : '0' + today.getDate()}`;
    const time = `T${today.getHours() > 10 ? today.getHours() : '0' + today.getHours()}:${
      today.getMinutes() > 10 ? today.getMinutes() : '0' + today.getMinutes()
    }`;
    const dateTime = date + time;

    const options = this.props.pets.map(pet => {
      return { value: pet.id, name: 'petId', label: pet.name, key: pet.id };
    });
    return (
      <>
        <div className='appointmentTitle'>New Appointment</div>

        <form className='appointmentOuterDiv' onSubmit={this.handleSubmit}>
          <div className='appointmentInnerDiv'>
            <label className='lableAppointment' htmlFor='start_date'>
              Start Date:
              <input
                type='datetime-local'
                id='start_date'
                name='start_date'
                min={dateTime}
                className='appointmentInput'
                onChange={this.handleChange}
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
                className='appointmentInput'
                onChange={this.handleChange}
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
                className='appointmentInput'
                onChange={this.handleChange}
              />
            </label>
            <label className='lableAppointment aaa' htmlFor='petId'>
              Pet:
              <Select
                key='1'
                className='selectPet'
                placeholder='Pets'
                options={options}
                onChange={this.handleSelected}
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
