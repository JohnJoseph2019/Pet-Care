import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    isSitter: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handRegisterSubmit(this.state);
  };

  render() {
    const {username, email, password} = this.state;
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
          <button>Submit</button>
        </form>
      </>
    );
  }
}
