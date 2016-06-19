import React, { Component } from 'react'
import LoginIcon from './login-icon.jsx'

class LoginIconBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id={ this.props.id }>
      {
        this.props.icons.map((icon) => {
          return <LoginIcon key={ icon.key + '-icon' } icon={ icon.icon } link={ icon.link } />
        })
      }
      </div>
    )
  }

}

export default LoginIconBox
