import React, { Component } from 'react'
import { Link } from 'react-router'

class Icon extends Component {
  constructor(props) {
    super(props)
  }

  render() {
  	return (
  		<Link to={ this.props.link }>
	  		<i className={ this.props.icon } aria-hidden="true"></i>
  		</Link>
  	)
  }

}

export default Icon
