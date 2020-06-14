import React, { Component } from 'react';
import './AppointmentsPage.css';
export default class AppointmentsPage extends Component {
  state = {
    appointments: [],
  };
  componentDidMount() {
    console.log('APPOINTMENT DID MOUNT:----------');
    // this.getApp(this.props.petId);
  }
  getApp = async petId => {
    const apointments = await this.props.getAllPetsAppointments(petId);
    this.setState({ apointments });
  };
  // componentDidUpdate(prevProps, prevState) {
  //   // if (prevProps.currentUser !== this.props.currentUser) {
  //   //   this.getPets();
  //   //   console.log(window.location.pathname);
  //   //   console.log(this.props);
  //   //   console.log('in did update', prevState);
  //   //   // this.setState({ formPetData: prevState.formPetData });
  //   // }
  //   console.log('APPOINTMENT DID UPDATE:----------');
  //   console.log('prevProps', prevProps.appointments);
  //   console.log('props', this.props);
  // }
  render() {
    const { petId, appointments, pets, getAllPetsAppointments } = this.props;
    // console.log('in RENDER AppointmentPage:', this.props);
    const petName = pets.find(pet => pet.id === parseInt(petId));
    console.log(appointments);
    // const = showAppointments = appointments
    return (
      <>
        <div className='pageTitle'>{petName ? petName.name : ''}'s appointments:</div>
        <div className='appointmentContainer'>
          {appointments
            ? appointments.map(appointment => {
                return (
                  <>
                    <div className class='apppointmentInnercontainer'>
                      <div className='startEnd'>
                        <span className='spanAppointment'>Start:</span>
                        <div className='startDATE'>{appointment.start_date}</div>
                        <span className='spanAppointment'>End:</span>
                        <div className='endDATE'>{appointment.end_date}</div>
                      </div>
                      <div className='divRestriction'>
                        <span className='spanAppointment'>Note:</span>
                        <div className='restrictionAppointment'>{appointment.restriction_note}</div>
                      </div>
                    </div>
                  </>
                );
              })
            : ''}
        </div>
      </>
    );
  }
}
