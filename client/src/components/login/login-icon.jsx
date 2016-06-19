import React, { Component } from 'react'

class LoginIcon extends Component {
  constructor(props) {
    super(props)
  }

  render() {
  	return (
  		<a href={ this.props.link }>
	  		<i className={ this.props.icon } aria-hidden="true"></i>
  		</a>
  	)
  }

}

export default LoginIcon
