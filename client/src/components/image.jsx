import React, { Component } from 'react'

class Image extends Component {
  render() {
    return (
      <div id={ this.props.id } className={ this.props.className } src={ this.props.src }></div>
      )
  }
}

export default Image
