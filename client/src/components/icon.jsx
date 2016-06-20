import React, { Component } from 'react'
import { Link } from 'react-router'
import { NavItem } from 'react-bootstrap'

class Icon extends Component {
  constructor(props) {
    super(props)
  }

  render() {
  	return (
	  	<NavItem>
        <Link to={ this.props.link }>
          <i className={ this.props.icon } aria-hidden="true"></i>
        </Link>
      </NavItem>
  	)
  }

}

export default Icon
