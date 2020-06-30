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
  };

  componentDidMount() {
    if (this.props.currentUser && !this.props.sitter) {
      this.getPets();
      this.getTotalAppointments();
    }
  }
  componentDidUpdate(prevProps) {
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
    console.log(deleted);
    this.setState(prevState => ({
      pets: prevState.pets.filter(pet => pet.id !== petId),
    }));
  };
  /************** APPOINTMENTS  ********************************************************************/
  createAppointmentTwo = async (petId, data) => {
    const newApp = await createAppointment(petId, data);
    this.setState(prevState => ({
      appointments: [...prevState.appointments, newApp],
    }));
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
    this.setState(
      prevState => ({
        appointments: prevState.appointments.map(appointment => {
          return appointment.id === parseInt(appId) ? updatedAppointment : appointment;
        }),
      }),
      () => this.forceUpdate()
    );
  };
  render() {
    const { currentUser } = this.props;
    console.log('in MAIN', currentUser);
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
            path='/add-pet'
            render={props =>
              currentUser ? (
                <AddPet {...props} createPet={this.createPet} />
              ) : (
                <Redirect to='/pets' />
              )
            }
          />
          <Route
            exact
            path='/pets/:id'
            render={props =>
              currentUser ? (
                <PetDetail
                  {...props}
                  currentPet={this.state.pets.find(
                    pet => pet.id === parseInt(props.match.params.id)
                  )}
                  removePet={this.removePet}
                  setPetEdit={this.setPetEdit}
                  getAllPetsAppointments={this.getAllPetsAppointments}
                />
              ) : (
                <Redirect to='/pets' />
              )
            }
          />
          <Route
            exact
            path='/pets/:id/edit'
            render={props => (
              <PetEdit
                {...props}
                petId={props.match.params.id}
                petData={this.state.formPetData}
                editSubmit={this.editSubmit}
                handleChange={this.handleChange}
              />
            )}
          />
          <Route
            path='/pets/:id/appointments'
            render={props =>
              currentUser ? (
                <AppointmentsPage
                  {...props}
                  petId={props.match.params.id}
                  appointments={this.state.appointments}
                  pets={this.state.pets}
                  deleteAppointment={this.deleteAppointment}
                />
              ) : (
                <Redirect to='/' />
              )
            }
          />
          <Route
            path='/appointments/new'
            render={props =>
              currentUser ? (
                <NewAppointments
                  {...props}
                  createAppointmentTwo={this.createAppointmentTwo}
                  pets={this.state.pets}
                  getAllPetsAppointments={this.getAllPetsAppointments}
                />
              ) : (
                <Redirect to='/' />
              )
            }
          />
          <Route
            path='/sitterAppointments'
            render={() => (
              <SitterAppointments
                appointments={this.state.appointments}
                currentUser={this.props.currentUser}
              />
            )}
          />
          <Route
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
