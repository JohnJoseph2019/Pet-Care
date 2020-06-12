import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ShowPets from "./ShowPets";

export default class Main extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className='main-div'>
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
          render={(props) => <ShowPets currentUser={currentUser} />}
        />
      </div>
    );
  }
}
