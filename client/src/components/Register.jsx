import React, { Component } from "react";
import { Link } from "react-router-dom";
import Toggle from "react-toggle";
import "./Register.css";

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    img_url: "",
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
          isSitter: false,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          username: "",
          email: "",
          password: "",
          isSitter: false,
          isError: true,
          errorMsg: "Sign Up Details Invalid",
        });
      });
  };

  handleToggle = () => {
    this.setState((prevState) => ({
      isSitter: !prevState.isSitter,
    }));
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
    const { username, email, password, img_url } = this.state;
    return (
      <>
        <form className='RegisterOuterDiv' onSubmit={this.handleSubmit}>
          <div className='Register-Title'>Register</div>
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
            E-mail:
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
          <label className='imgUrlInput' htmlFor='img_url'>
            Image Link:
            <input
              required
              type='text'
              name='img_url'
              value={img_url}
              id='imgUrl-input'
              placeholder='Image link'
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor='isSitter'>
            Sitter:
            <Toggle
              id='isSitter'
              defaultChecked={this.state.isSitter}
              onChange={this.handleToggle}
            />
          </label>
          <br />
          {this.renderError()}
        </form>
      </>
    );
  }
}
