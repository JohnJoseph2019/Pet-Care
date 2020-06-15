import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ShowPets from './ShowPets';
import { getAllPets, createPet, updatePet, deletePet } from '../services/pets';
import {
  createAppointment,
  getAllAppointments,
  deleteAppointment,
  getAllOfTheAppointments,
  updateAppointment,
} from '../services/appointments';
import AddPet from './AddPet';
import PetDetail from './PetDetail';
import PetEdit from './PetEdit';
import NewAppointments from './NewAppointments';
import AppointmentsPage from './AppointmentsPage';
import Sitter from './SitterComponents/Sitter';
import SitterAppointments from './SitterComponents/SitterAppointments';

export default class Main extends Component {
  state = {
    pets: [],
    formPetData: {
      name: '',
      breed: '',
      img_url: '',
      pet_type: '',
      age: 0,
    },
    appointments: [],
    formAppointmentData: {
      restriction_note: '',
      accepted: false,
      start_date: '',
      end_date: '',
    },
    Pet_id: null,
  };

  componentDidMount() {
    if (this.props.currentUser && !this.props.sitter) {
      this.getPets();
      this.getTotalAppointments();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.getPets();
      this.getTotalAppointments();
    }
  }

  /************** PETS  ********************************************************************/
  getPets = async () => {
    const pets = await getAllPets();
    this.setState({ pets });
  };
  createPet = async addPet => {
    const newPet = await createPet(addPet);
    this.setState(prevState => ({
      pets: [...prevState.pets, newPet],
    }));
  };
  setPetEdit = petData => {
    const { name, breed, img_url, age, pet_type } = petData;
    this.setState({
      formPetData: {
        name,
        breed,
        img_url,
        pet_type,
        age,
      },
    });
    // this.props.history.push(`/cats/${catData.id}/edit`);
  };
  editSubmit = async petId => {
    const updatedPet = await updatePet(petId, this.state.formPetData);
    this.setState(prevState => ({
      pets: prevState.pets.map(pet => {
        return pet.id === parseInt(petId) ? updatedPet : pet;
      }),
    }));
    // this.props.history.push(`/cats/${id}`);
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formPetData: {
        ...prevState.formPetData,
        [name]: value,
      },
    }));
  };
  removePet = async petId => {
    const deleted = await deletePet(petId);
    this.setState(prevState => ({
      pets: prevState.pets.filter(pet => pet.id !== petId),
    }));
  };
  /************** APPOINTMENTS  ********************************************************************/
  createAppointment = async () => {
    const newAppointment = await createAppointment(
      this.state.Pet_id,
      this.state.formAppointmentData
    );
    console.log('createdAppointment info here: ', newAppointment);
  };
  appointmentHandleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formAppointmentData: {
        ...prevState.formAppointmentData,
        [name]: value,
      },
    }));
  };
  handleSelected = selectedOption => {
    this.setState({
      [selectedOption.name]: selectedOption.value,
    });
  };
  getAllPetsAppointments = async petId => {
    const appointments = await getAllAppointments(petId);
    this.setState({ appointments });
  };

  deleteAppointment = async (petId, appId) => {
    const deletedApp = await deleteAppointment(petId, appId);
    console.log(deletedApp);
    this.setState(prevState => ({
      appointments: prevState.appointments.filter(app => app.id !== petId),
    }));
  };

  getTotalAppointments = async () => {
    const appointments = await getAllOfTheAppointments();
    this.setState({ appointments });
  };
  updateApp = async (petId, appId, appData) => {
    const updatedAppointment = await updateAppointment(parseInt(petId), parseInt(appId), appData);
    this.setState(prevState => ({
      appointments: prevState.appointments.map(appointment => {
        return appointment.id === parseInt(appId) ? updatedAppointment : appointment;
      }),
    }));
  };
  render() {
    const { currentUser } = this.props;
    // console.log('In Main', this.props);
    // console.log('In Main pets', this.state.pets);
    // console.log('IN MAIN SITTER APPOINTMENTS', this.state.appointments);

    return (
      <div className='main-div'>
        <Switch>
          <Route
            exact
            path='/'
            render={props =>
              !currentUser ? (
                <Login {...props} handleLoginSubmit={this.props.handleLoginSubmit} />
              ) : (
                <Redirect to='/pets' />
              )
            }
          />
          <Route
            exact
            path='/user/register'
            render={props => (
              <Register {...props} handRegisterSubmit={this.props.handRegisterSubmit} />
            )}
          />
          <Route
            exact
            path='/pets'
            render={() =>
              currentUser && !currentUser.isSitter ? (
                <ShowPets currentUser={currentUser} pets={this.state.pets} />
              ) : currentUser && currentUser.isSitter ? (
                <Redirect to='/sitterAppointments' />
              ) : (
                <Redirect to='/' />
              )
            }
          />
          <Route
            exact
            path='/add-pet'
            render={props =>
              currentUser ? <AddPet {...props} createPet={this.createPet} /> : <Redirect to='/' />
            }
          />
          {currentUser ? (
            <Route
              exact
              path='/pets/:id'
              render={props => {
                const petId = props.match.params.id;
                const currentPet = this.state.pets.find(pet => pet.id === parseInt(petId));

                return (
                  <PetDetail
                    {...props}
                    currentPet={currentPet}
                    removePet={this.removePet}
                    setPetEdit={this.setPetEdit}
                    getAllPetsAppointments={this.getAllPetsAppointments}
                  />
                );
              }}
            />
          ) : (
            <Redirect to='/' />
          )}
          <Route
            exact
            path='/pets/:id/edit'
            render={props => {
              const petId = props.match.params.id;
              // const currentPet = this.state.formPetData;
              return (
                <PetEdit
                  {...props}
                  petId={petId}
                  petData={this.state.formPetData}
                  editSubmit={this.editSubmit}
                  handleChange={this.handleChange}
                />
              );
            }}
          />
          <Route
            exact
            path='/appointments/new'
            render={props => {
              return (
                <NewAppointments
                  {...props}
                  petId={this.state.Pet_id}
                  pets={this.state.pets}
                  appointmentData={this.state.formAppointmentData}
                  createAppointment={this.createAppointment}
                  appointmentHandleChange={this.appointmentHandleChange}
                  handleSelected={this.handleSelected}
                />
              );
            }}
          />
          <Route
            exact
            path='/pets/:id/appointments'
            render={props => {
              const petId = props.match.params.id;
              // this.getAllPetsAppointments(petId);
              return (
                <AppointmentsPage
                  {...props}
                  petId={petId}
                  appointments={this.state.appointments}
                  pets={this.state.pets}
                  deleteAppointment={this.deleteAppointment}
                />
              );
            }}
          />
          <Route
            exact
            path='/sitterAppointments'
            render={() => (
              <SitterAppointments
                appointments={this.state.appointments}
                currentUser={this.props.currentUser}
              />
            )}
          />
          <Route
            exact
            path='/sitter'
            render={props => (
              <Sitter
                {...props}
                appointments={this.state.appointments}
                pets={this.state.pets}
                currentUser={this.props.currentUser}
                updateApp={this.updateApp}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
