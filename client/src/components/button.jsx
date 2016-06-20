import React, { Component } from 'react'

class Button extends Component {

  render() {
    return (
      <a onClick={ this.props.handleClick }>{ this.props.label }</a>
      )
  }
}

export default Button