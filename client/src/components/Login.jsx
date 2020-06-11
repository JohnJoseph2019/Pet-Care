import React, { Component } from 'react'

export default class Login extends Component {
  state = {

  }
  render() {
    const { username, password } = this.state
    return (
<form onSubmit={this.onSignIn}>
            <div className="userInput">
              <input
                required
                type="text"
                name="username"
                value={username}
                id="user-input"
                placeholder="username"
                onChange={this.handleChange}
              />
            </div>
            <div className="passwordInput">
              <input
                required
                type="password"
                name="password"
                value={password}
                id="password-input"
                placeholder="Password (min 6 characters)"
                onChange={this.handleChange}
              />
            </div>
            {this.renderError()}
          </form>

    )
  }
}
