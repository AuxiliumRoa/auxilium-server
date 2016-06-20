import React, { Component } from 'react'
import Image from '../image.jsx'

class ActionBox extends Component {
  render() {
    return (
      <div className='action-box'>
        <Image className='small-action' src={this.props.src}/>
        <div>
          <h4>{ this.props.title }</h4>
          <p>{ this.props.who }</p>
          <p>{ this.props.where }</p>
          <p>{ this.props.when }</p>
          <p>{ this.props.what }</p>
        </div>
      </div>
      )
  }
}

export default ActionBox