import React, { Component } from 'react'
import Hero from './hero.jsx'
import LoginContainer from './login-container.jsx'
import { Row, Col, Image } from 'react-bootstrap'


class LoginPage extends Component {

  render() {
    return (
      <div id='login-page' class="container">
      <Row className='loginRow'>
        <Col sm={12} className='heroCol'>
          <Hero />
        </Col>
        <Col sm={12} className='loginCol'>
          <LoginContainer />
        </Col>
      </Row>
      </div>
    )
  }

}

export default LoginPage
