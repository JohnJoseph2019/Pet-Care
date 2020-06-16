import React, { Component } from 'react';
import './AppointmentsPage.css';
export default class AppointmentsPage extends Component {
  render() {
    const { petId, appointments, pets, deleteAppointment, history } = this.props;

    // console.log('in RENDER AppointmentPage:', this.props);
    const petName = pets.find(pet => pet.id === parseInt(petId));
    console.log(appointments);
    // const = showAppointments = appointments
    return (
      <>
        <div className='pageTitle'>{petName ? petName.name : ''}'s appointments:</div>
        <div className='appointmentContainer'>
          {appointments.length !== 0 ? (
            appointments.map(appointment => {
              return (
                <div key={appointment.id}>
                  <div className='apppointmentInnercontainer'>
                    <div className='startEnd'>
                      <span className='spanAppointment'>Start:</span>
                      <div className='startDATE'>
                        {new Date(appointment.start_date).toDateString()}
                      </div>
                      <span className='spanAppointment'>End:</span>
                      <div className='endDATE'>{new Date(appointment.end_date).toDateString()}</div>
                    </div>
                    <div className='divRestriction'>
                      <span className='spanAppointment'>Note:</span>
                      <div className='restrictionAppointment'>{appointment.restriction_note}</div>
                    </div>
                    <button
                      className='appDelete'
                      onClick={() => {
                        deleteAppointment(petId, appointment.id);
                        history.push(`/pets/${petId}`);
                      }}>
                      delete
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>No appointment made for this pet</h1>
          )}
        </div>
      </>
    );
  }
}
