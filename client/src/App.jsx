import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

export default class App extends Component {
  state = {
    currentUser: null,
  };

  componentDidMount() {
    this.handleVerify();
  }

  handleLoginSubmit = async loginData => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
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
    // this.props.history.push('/user/login');
  };

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  };

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} handleLogout={this.handleLogout} />
        <Main
          handleLoginSubmit={this.handleLoginSubmit}
          handRegisterSubmit={this.handRegisterSubmit}
          currentUser={this.state.currentUser}
        />
      </>
    );
  }
}

// export default withRouter(App);
