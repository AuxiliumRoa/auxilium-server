import React, { Component } from 'react'
import Hero from './hero.jsx'
import LoginContainer from './login-container.jsx'

class LoginPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='login-page'>
        <Hero />
        <LoginContainer />
      </div>
      )
  }
}

export default LoginPage