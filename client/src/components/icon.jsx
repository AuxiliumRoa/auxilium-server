import React, { Component } from 'react'

class Icon extends Component {
  constructor(props) {
    super(props)
  }

  render() {
  	return (
  		<a href={ "/auth/" + this.props.provider }>
	  		<i className={ this.props.icon } aria-hidden="true"></i>
  		</a>
  	)
  }

}

export default Icon
