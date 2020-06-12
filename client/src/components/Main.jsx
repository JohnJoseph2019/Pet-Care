import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ShowPets from "./ShowPets";
import { getAllPets } from "../services/pets";

export default class Main extends Component {
  state = {
    pets: [],
  };

  componentDidMount() {
    this.getPets();
  }
  getPets = async () => {
    const pets = await getAllPets();
    console.log("PETS", pets);
    this.setState({ pets });
  };
  render() {
    const { currentUser } = this.props;
    console.log("In Main", currentUser, this.state.pets);
    return (
      <div className='main-div'>
        <Switch>
          <Route
            path='/user/login'
            render={(props) =>
              !currentUser ? (
                <Login
                  {...props}
                  handleLoginSubmit={this.props.handleLoginSubmit}
                />
              ) : (
                <Redirect to='/pets' />
              )
            }
          />
          <Route
            path='/user/register'
            render={(props) => (
              <Register
                {...props}
                handRegisterSubmit={this.props.handRegisterSubmit}
              />
            )}
          />
          <Route
            path='/pets'
            render={() => (
              <ShowPets currentUser={currentUser} pets={this.state.pets} />
            )}
          />
        </Switch>
      </div>
    );
  }
}
