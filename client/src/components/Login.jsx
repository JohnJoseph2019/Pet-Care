import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const {history} = this.props;
    this.props.handleLoginSubmit(this.state);
    history.push("/");
    this.setState({
      username: "",
      password: "",
    });
  };

  render() {
    const {username, password} = this.state;
    return (
      <>
        <div className='Login-Title'>Login</div>
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
          <label className='passwordInput' htmlFor='username'>
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
          <Link to='/user/register'>Register</Link>
          <button>Submit</button>
        </form>
      </>
    );
  }
}
