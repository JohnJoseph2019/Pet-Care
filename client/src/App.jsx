import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import { Redirect } from 'react-router-dom';

export default class App extends Component {
  state = {
    currentUser: null,
    sitter: null,
  };

  componentDidMount() {
    this.handleVerify();
  }

  handleLoginSubmit = async loginData => {
    const currentUser = await loginUser(loginData);
    console.log('aaaaaaaaaa', currentUser.isSitter);
    const sitter = currentUser.isSitter;
    this.setState({ currentUser, sitter });
  };
  handRegisterSubmit = async registerData => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser });
  };

  handleLogout = () => {
    this.setState({
      currentUser: null,
    });
    localStorage.clear();
    removeToken();
  };

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser });
    }
  };

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} handleLogout={this.handleLogout} />
        <Main
          handleLoginSubmit={this.handleLoginSubmit}
          handRegisterSubmit={this.handRegisterSubmit}
          currentUser={this.state.currentUser}
          sitter={this.state.sitter}
        />
      </>
    );
  }
}
