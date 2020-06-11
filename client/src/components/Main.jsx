import React, {Component} from "react";
import {Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

export default class Main extends Component {
  render() {
    return (
      <div className='main-div'>
        <Route
          path='/user/login'
          render={() => (
            <Login handleLoginSubmit={this.props.handleLoginSubmit} />
          )}
        />
        <Route
          path='/user/register'
          render={() => (
            <Register handRegisterSubmit={this.props.handRegisterSubmit} />
          )}
        />
      </div>
    );
  }
}
