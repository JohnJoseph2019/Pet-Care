import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ShowPets from "./ShowPets";

export default class Main extends Component {
  render() {
    return (
      <div className='main-div'>
        <Route
          path='/user/login'
          render={(props) => (
            <Login
              {...props}
              handleLoginSubmit={this.props.handleLoginSubmit}
            />
          )}
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
          render={(props) => (
            <ShowPets {...props} currentUser={this.state.currentUser} />
          )}
        />
      </div>
    );
  }
}
