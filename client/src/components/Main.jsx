import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ShowPets from './ShowPets';
import { getAllPets, createPet, updatePet, deletePet } from '../services/pets';
import AddPet from './AddPet';
import PetDetail from './PetDetail';
import PetEdit from './PetEdit';

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
    if (this.props.currentUser) {
      this.getPets();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.getPets();
      console.log('in did update', prevState);
      // this.setState({ formPetData: prevState.formPetData });
    }
  }
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
    await deletePet(petId);
    this.setState(prevState => ({
      pets: prevState.pets.filter(pet => pet.id !== petId),
    }));
  };

  render() {
    const { currentUser, logOut } = this.props;
    console.log('In Main', this.props);
    return (
      <div className='main-div'>
        <Switch>
          <Route
            exact
            path='/'
            render={props =>
              !currentUser || logOut ? (
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
              currentUser ? (
                <ShowPets currentUser={currentUser} pets={this.state.pets} />
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
                />
              );
            }}
          />
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
                  // currentUser={this.props.currentUser}
                  // pets={this.state.pets}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
