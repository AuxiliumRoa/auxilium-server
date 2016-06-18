import React, { Component } from 'react'

class Button extends Component {

  handleClick() {
    console.log('The ', this.props.label, ' has been clicked')
  }
  render() {
    return (
      <button onClick={ this.handleClick.bind(this) }>{ this.props.label }</button>
      )
  }
}

export default Button