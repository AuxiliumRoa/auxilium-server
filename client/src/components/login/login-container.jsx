import React, { Component } from 'react'
import IconBox from '../icon-box.jsx'
import SmallTitle from '../small-title.jsx'

const iconArray = [
  {
    icon: 'fa fa-facebook-square fa-3x',
    provider: 'facebook'
  },
  {
    icon: 'fa fa-twitter-square fa-3x',
    provider: 'twitter'
  },
  {
    icon: 'fa fa-google-plus-square fa-3x',
    provider: 'google'
  }
]

class LoginContainer extends Component {
  constructor(props) {
      super(props)
    }

  render() {
    return (
      <div id='login-container'>
        <SmallTitle title='Login with:' />
        <IconBox id='login-icons' icons={ iconArray } login={ this.props.login } />
      </div>
      )
  }
}

export default LoginContainer
