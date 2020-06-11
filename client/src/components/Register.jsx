import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    isSitter: false,
    isError: false,
    errorMsg: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      isError: false,
      errorMsg: "",
    });
  };
  handleSubmit = (e) => {
    const { history } = this.props;
    const { isError, errorMsg, ...other } = this.state;
    e.preventDefault();
    this.props
      .handRegisterSubmit({ ...other })
      .then(() => history.push("/"))
      .then(() => {
        this.setState({
          username: "",
          email: "",
          password: "",
          isError: false,
          errorMsg: "",
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          username: "",
          email: "",
          password: "",
          isError: true,
          errorMsg: "Sign Up Details Invalid",
        });
      });
  };

  renderError = () => {
    const toggleForm = this.state.isError ? "danger-signup" : "";
    if (this.state.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {this.state.errorMsg}
        </button>
      );
    } else {
      return (
        <button className='login-signup' type='submit'>
          Sign Up & Log In
        </button>
      );
    }
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <>
        <div className='Register-Title'>Register</div>
        <form onSubmit={this.handleSubmit}>
          <label className='usernameInput' htmlFor='username'>
            Username:
            <input
              required
              type='text'
              name='username'
              value={username}
              id='username-input'
              placeholder='Username...'
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label className='emailInput' htmlFor='email'>
            email:
            <input
              required
              type='email'
              name='email'
              value={email}
              id='email-input'
              placeholder='email...'
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label className='passwordInput' htmlFor='password'>
            Password:
            <input
              required
              type='password'
              name='password'
              value={password}
              id='password-input'
              placeholder='Password...'
              onChange={this.handleChange}
            />
          </label>
          <br />
          <Link to='/user/login'></Link>
          {this.renderError()}
        </form>
      </>
    );
  }
}
