import React from 'react';
import './SitterAppointments.css';

export default function SitterAppointments(props) {
  const myAppointments = props.appointments.filter(app => app.user_id === props.currentUser.id);
  return (
    <div>
      {props.currentUser && (
        <>
          <div className='sitterTitle'> Hi {props.currentUser.username}, </div>
          <div className='sitterAvailable'>Your appointments</div>
          <div className='sitterContainer'>
            {myAppointments.map(app => {
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
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
