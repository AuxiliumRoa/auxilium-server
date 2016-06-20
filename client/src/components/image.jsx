import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
 
class ImageComp extends Component {
  render() {
    return (
      <Image id={ this.props.id } className={ this.props.className } src={ this.props.src } responsive />
      )
  }
}

export default ImageComp
