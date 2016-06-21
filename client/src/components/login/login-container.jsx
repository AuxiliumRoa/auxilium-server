import React, { Component } from 'react'
import LoginIconBox from './login-icon-box.jsx'
import SmallTitle from '../small-title.jsx'

const iconArray = [
  {
    icon: 'fa fa-facebook-square fa-3x',
    key: 'facebook',
    link: "/auth/facebook"
  },
  {
    icon: 'fa fa-twitter-square fa-3x',
    key: 'twitter',
    link: "/auth/twitter"
  },
  {
    icon: 'fa fa-linkedin-square fa-3x',
    key: 'linkedin',
    link: "/auth/linkedin"
  }
]

class LoginContainer extends Component {

  render() {
    return (
      <div id='login-container'>
        <SmallTitle title='LOGIN WITH' />
        <LoginIconBox id='login-icons' icons={ iconArray } />
      </div>
    )
  }

}

export default LoginContainer
