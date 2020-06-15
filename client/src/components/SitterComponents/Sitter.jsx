import React, { Component } from 'react';
import './Sitter.css';

export default class Sitter extends Component {
  state = {
    isChecked: false,
    petId: null,
    appId: null,
  };
  oncChange = (petId, appId) => {
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
  handlesubmit = e => {
    e.preventDefault();
    this.props.updateApp(this.state.petId, this.state.appId, { accepted: true });
    this.props.history.push('/sitter');
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
                      <form
                        className='checkBoxMain'
                        onSubmit={() => this.handlesubmit(app.pet_id, app.id)}>
                        <div className='inlineBox'>
                          <label htmlFor='true'>Yes: </label>
                          <input
                            type='checkbox'
                            id='true'
                            name='accepted'
                            value={true}
                            onChange={() => this.oncChange(app.pet_id, app.id)}
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
          </>
        )}
      </div>
    );
  }
}
