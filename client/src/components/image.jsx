import React, { Component } from 'react'

class Image extends Component {
  render() {
    return (
      <img id={ this.props.id } className={ this.props.className } src={ this.props.src } />
      )
  }
}

export default Image
