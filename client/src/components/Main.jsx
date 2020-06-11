import React, { Component } from 'react'
import {Route} from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <div  className="main-div">
        <Route path='/user/login' render={() => (
          <>
            <h2>Login</h2>
          </>
        )}
        />
      </div>
    )
  }
}
