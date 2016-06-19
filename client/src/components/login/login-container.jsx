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
    icon: 'fa fa-google-plus-square fa-3x',
    key: 'google',
    link: "/auth/google"
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
