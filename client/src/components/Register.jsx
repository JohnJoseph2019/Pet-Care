import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';
import './Register.css';

export default class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    img_url: '',
    isSitter: false,
    isError: false,
    errorMsg: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      isError: false,
      errorMsg: '',
    });
  };
  handleSubmit = e => {
    const { history } = this.props;
    const { isError, errorMsg, ...other } = this.state;
    e.preventDefault();
    this.props
      .handRegisterSubmit({ ...other })
      .then(() => history.push('/pets'))
      .catch(error => {
        console.error(error);
        this.setState({
          username: '',
          email: '',
          password: '',
          isSitter: false,
          isError: true,
          errorMsg: 'Sign Up Details Invalid',
        });
      });
  };

  handleToggle = () => {
    this.setState(prevState => ({
      isSitter: !prevState.isSitter,
    }));
  };

  renderError = () => {
    const toggleForm = this.state.isError ? 'dangerRegister' : 'SignUpRegister';
    if (this.state.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {this.state.errorMsg}
        </button>
      );
    } else {
      return (
        <button type='submit' className={toggleForm}>
          Sign Up
        </button>
      );
    }
  };

  render() {
    const { username, email, password, img_url } = this.state;
    return (
      <>
        <form className='RegisterOuterDiv' onSubmit={this.handleSubmit}>
          <div className='LoginTitle'>Sign Up</div>
          <div className='SignUPInnerDiv'>
            <label className='usernameSignUP' htmlFor='username'>
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
            <label className='emailSignUP' htmlFor='email'>
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
            <label className='passwordSignUP' htmlFor='password'>
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
            <label className='imgUrlSignUP' htmlFor='img_url'>
              Image Link:
              <input
                type='text'
                name='img_url'
                value={img_url}
                id='imgUrlSignUP'
                placeholder='Image link'
                onChange={this.handleChange}
              />
            </label>
            <label className='toggleSwitch' htmlFor='isSitter'>
              Sitter:
              <Toggle
                id='isSitter'
                defaultChecked={this.state.isSitter}
                onChange={this.handleToggle}
              />
            </label>
            {this.renderError()}
          </div>
          <div className='SignUPToSignUp'>
            Already have an Account?
            <Link to='/user/login'>Log In</Link>
          </div>
        </form>
      </>
    );
  }
}
