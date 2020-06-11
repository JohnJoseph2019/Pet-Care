import React, {Component} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import {loginUser} from "./services/auth";

export default class App extends Component {
  state = {
    currentUser: null,
  };
  handleLoginSubmit = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({currentUser});
  };
  render() {
    return (
      <>
        <Header />
        <Main handleLoginSubmit={this.handleLoginSubmit} />
      </>
    );
  }
}
