import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ShowPets from './ShowPets';
import { getAllPets, createPet, updatePet } from '../services/pets';
import AddPet from './AddPet';

export default class Main extends Component {
  state = {
    pets: [],
  };

  componentDidMount() {
    if (this.props.currentUser) {
      console.log('in main componentDifMount');
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
    // this.props.history.push(`/cats/${id}`);
  };
  render() {
    const { currentUser } = this.props;
    // console.log('In Main', currentUser, this.state.pets);
    return (
      <div className='main-div'>
        <Switch>
          <Route
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
            path='/user/register'
            render={props => (
              <Register {...props} handRegisterSubmit={this.props.handRegisterSubmit} />
            )}
          />
          <Route
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
            path='/pets'
            render={() => <ShowPets currentUser={currentUser} pets={this.state.pets} />}
          />
          <Route
            path='/add-pet'
            render={props => <AddPet {...props} createPet={this.createPet} />}
          />
        </Switch>
      </div>
    );
  }
}
