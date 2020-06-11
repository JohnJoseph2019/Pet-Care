import React, {Component} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import {loginUser, registerUser, removeToken} from "./services/auth";

export default class App extends Component {
  state = {
    currentUser: null,
  };
  handleLoginSubmit = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({currentUser});
  };
  handRegisterSubmit = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({currentUser});
  };

  handleLogout = () => {
    this.setState({
      currentUser: null,
    });
    localStorage.clear();
    removeToken();
  };

  render() {
    return (
      <>
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Main
          handleLoginSubmit={this.handleLoginSubmit}
          handRegisterSubmit={this.handRegisterSubmit}
        />
      </>
    );
  }
}
