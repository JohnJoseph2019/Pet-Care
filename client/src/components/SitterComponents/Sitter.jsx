import React, { Component } from 'react';
import './Sitter.css';

export default class Sitter extends Component {
  state = {
    isChecked: false,
    petId: null,
    appId: null,
  };
  onChange = (petId, appId) => {
    console.log('in hear =========', petId, appId, this.state.isChecked);
    if (this.state.isChecked === true) {
      petId = '';
      appId = '';
    }
    console.log('aaaaaaa', petId, appId);
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
      petId,
      appId,
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props
      .updateApp(this.state.petId, this.state.appId, { accepted: true })
      .then(this.props.history.push('/sitterAppointments'))
      .catch();
  };
  render() {
    const { appointments, currentUser } = this.props;
    console.log(currentUser);
    const openApp = appointments.filter(app => app.accepted === false);
    console.log(this.state.isChecked);
    console.log(this.props.updateApp);
    return (
      <div>
        {currentUser && (
          <>
            <div className='sitterTitle'> Hi {currentUser.username}, </div>
            <div className='sitterAvailable'>Available Appointments</div>
            <div className='BigContiner'>
              <div className='sitterContainer'>
                {openApp.map(app => {
                  return (
                    <div key={app.id} className='sitterOuterContainer'>
                      <div>
                        <div className='sitterStartEndDate'>
                          <span className='spanAppointment'>Start:</span>
                          <div className='startDATE'>{new Date(app.start_date).toDateString()}</div>
                          <span className='spanAppointment'>End:</span>
                          <div className='endDATE'>{new Date(app.end_date).toDateString()}</div>
                        </div>
                        <div className='divRestriction'>
                          <span className='spanAppointment'>Note:</span>
                          <div className='restrictionAppointment'>{app.restriction_note}</div>
                        </div>
                        <form className='checkBoxMain' onSubmit={this.handleSubmit}>
                          <div className='inlineBox'>
                            <label htmlFor='true'>Yes: </label>
                            <input
                              type='checkbox'
                              id='true'
                              name='accepted'
                              value={true}
                              onChange={() => this.onChange(app.pet_id, app.id)}
                            />
                          </div>
                          <button type='submit' className='buttonSiiter'>
                            Save
                          </button>
                        </form>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
