import React, { Component } from 'react'

class Button extends Component {

  // handleClick() {
  //   console.log('The ', this.props.label, ' has been clicked')
  //   this.props.incrementIndex()
  // }
  render() {
    return (
      <button onClick={ this.props.handleClick }>{ this.props.label }</button>
      )
  }
}

export default Button