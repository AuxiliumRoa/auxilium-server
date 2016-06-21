import React, { Component } from 'react'

class ButtonMain extends Component {

  render() {
    return (
      <a onClick={ this.props.handleClick }>{ this.props.label }</a>
      )
  }
}

export default ButtonMain