import { Component } from 'react'
import Hero from './hero.jsx'
import LoginContainer from './login-container.jsx'

class LoginPage extends Component {

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
