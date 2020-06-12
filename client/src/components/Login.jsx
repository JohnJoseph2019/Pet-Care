import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
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
    e.preventDefault();
    const { history } = this.props;
    const { isError, errorMsg, ...other } = this.state;
    this.props
      .handleLoginSubmit({ ...other })
      .then(() => history.push("/"))
      .then(() => {
        this.setState({
          username: "",
          password: "",
          isError: false,
          errorMsg: "",
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          isError: true,
          errorMsg: "Invalid Credentials",
          email: "",
          password: "",
          username: "",
        });
      });
  };

  renderError = () => {
    const toggleForm = this.state.isError ? "danger" : "";
    if (this.state.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {this.state.errorMsg}
        </button>
      );
    } else {
      return (
        <button className='logIn' type='submit'>
          Log In
        </button>
      );
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <>
        <form className='LoginOuterDiv' onSubmit={this.handleSubmit}>
          <div className='Login-Title'>Welcome Back</div>
          <div className='LoginInnerDiv'>
            <label className='usernameInput' htmlFor='username'>
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
            <label className='passwordInput' htmlFor='username'>
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
            {this.renderError()}
          </div>
          <div className='LoginToSignUp'>
            Don't have an Account?
            <Link to='/user/register'>Sign Up</Link>
          </div>
        </form>
      </>
    );
  }
}
