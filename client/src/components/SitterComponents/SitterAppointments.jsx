import React from 'react';
import './SitterAppointments.css';

export default function SitterAppointments(props) {
  const myAppointments = props.appointments.filter(app => app.user_id === props.currentUser.id);
  return (
    <div>
      {props.currentUser && (
        <>
          <div className='sitterTitleSS'> Hi {props.currentUser.username}, </div>
          <div className='sitterAvailableSS'>Your appointments</div>
          <div className='sitterContainerSS'>
            {myAppointments.map(app => {
              return (
                <div key={app.id} className='sitterOuterContainerSS'>
                  <div>
                    <div className='sitterStartEndDateSS'>
                      <span className='spanAppointment'>Start:</span>
                      <div className='startDATE'>{new Date(app.start_date).toDateString()}</div>
                      <span className='spanAppointment'>End:</span>
                      <div className='endDATE'>{new Date(app.end_date).toDateString()}</div>
                    </div>
                    <div className='divRestrictionSS'>
                      <span className='spanAppointment'>Note:</span>
                      <div className='restrictionAppointmentSS'>{app.restriction_note}</div>
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
