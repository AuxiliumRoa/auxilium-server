import React, { Component } from 'react'

class Icon extends Component {

  handleClick() {
    this.props.login()
  }

  render() {
  	if (this.props.provider === 'facebook') {
	    return (
	    	<a href="/auth/facebook">
	      	<i className={ this.props.icon } aria-hidden="true"></i>
	      </a>
	     )
	  } else {
	  	return (
	      <i className={ this.props.icon } aria-hidden="true" onClick={this.handleClick.bind(this)} ></i>
	  	)
	  }
  }
}

export default Icon
