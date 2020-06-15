import React, { Component } from 'react';
import './Sitter.css';

export default class Sitter extends Component {
  render() {
    console.log('IN SITTER PAGE : APPOINTMENTS->', this.props.appointments);
    const { appointments, currentUser } = this.props;
    console.log(currentUser);
    const openApp = appointments.filter(app => app.accepted === false);
    return (
      <>
        <div className='sitterTitle'> Hi {currentUser.username}, </div>
        <div className='sitterAvailable'>Available Appointments</div>
        <div className='sitterContainer'>
          {openApp.map(app => {
            return (
              <div key={app.id}>
                <div className='sitterOuterContainer'>
                  <div className='sitterStartEndDate'>
                    <span className='spanAppointment'>Start:</span>
                    <div className='startDATE'>{app.start_date}</div>
                    <span className='spanAppointment'>End:</span>
                    <div className='endDATE'>{app.end_date}</div>
                  </div>
                  <div className='divRestriction'>
                    <span className='spanAppointment'>Note:</span>
                    <div className='restrictionAppointment'>{app.restriction_note}</div>
                  </div>
                  <form className='checkBoxMain' onSubmit={() => alert('you click me')}>
                    <div className='inlineBox'>
                      <input type='checkbox' id='true' name='accepted' value='true' />
                      <label htmlFor='true'>accept</label>
                    </div>
                    <button>Save</button>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
