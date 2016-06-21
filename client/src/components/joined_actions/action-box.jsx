import React, { Component } from 'react'
import Image from '../image.jsx'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'

class ActionBox extends Component {

  handleClick() {
    this.props.setDisplay(this.props.id)
    this.props.setNav('backJoined', null)
  }

  handleUnjoin() {
    this.props.unjoinAction(this.props.id)
  }

  render() {
    return (
      <div>
        <Link to='/single-action' className='action-box' onClick={ this.handleClick.bind(this)}>
          <Image className='small-action' src={this.props.src}/>
          <div>
            <h4>{ this.props.title }</h4>
            <p>{ this.props.who }</p>
            <p>{ this.props.where }</p>
            <p>{ this.props.when }</p>
            <p>{ this.props.what }</p>
          </div>
        </Link>
        <div onClick={ this.handleUnjoin.bind(this) } ><Button bsStyle="danger">Delete Action</Button></div>
      </div>
      )
  }
}

export default ActionBox