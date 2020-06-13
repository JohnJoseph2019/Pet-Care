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
    formData: {
      name: '',
      breed: '',
      img_url: '',
    },
  };

  componentDidMount() {
    if (this.props.currentUser) {
      this.getPets();
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.getPets();
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

  editPet = async (petId, editedCat) => {
    const updatedCat = await updatePet(petId, editedCat);
    this.setState(prevState => ({
      pets: prevState.pets.map(pet => {
        return pet.id === parseInt(petId) ? updatedCat : pet;
      }),
    }));
    return <Redirect to={`/pets/${petId}`} />;
  };
  removePet = async petId => {
    await deletePet(petId);
    this.setState(prevState => ({
      pets: prevState.pets.filter(pet => pet.id !== petId),
    }));
  };
  render() {
    const { currentUser } = this.props;
    // console.log('In Main', currentUser, this.state.pets);
    return (
      <div className='main-div'>
        <Switch>
          <Route
            exact
            path='/user/login'
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
              currentUser ? (
                <ShowPets currentUser={currentUser} pets={this.state.pets} />
              ) : (
                <Redirect to='/user/login' />
              )
            }
          />
          <Route
            exact
            path='/add-pet'
            render={props =>
              currentUser ? (
                <AddPet {...props} createPet={this.createPet} />
              ) : (
                <Redirect to='/user/login' />
              )
            }
          />
          <Route
            exact
            path='/pets/:id'
            render={props => {
              const catId = props.match.params.id;
              const currentPet = this.state.pets.find(pet => pet.id === parseInt(catId));
              return <PetDetail {...props} currentPet={currentPet} removePet={this.removePet} />;
            }}
          />
          <Route
            exact
            path='/pets/:edit/edit'
            render={props => (
              <PetEdit {...props} editPet={this.editPet} removePet={this.removePet} />
            )}
          />
        </Switch>
      </div>
    );
  }
}
