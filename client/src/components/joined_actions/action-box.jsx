import React, { Component } from 'react'
import Image from '../image.jsx'

class ActionBox extends Component {
  render() {
    return (
      <div className='action-box'>
        <Image className='small-action' src='this is an image'/>
        <div>This is info about { this.props.text }</div>
      </div>
      )
  }
}

export default ActionBox