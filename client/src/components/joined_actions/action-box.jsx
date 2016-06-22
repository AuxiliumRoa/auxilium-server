import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button, Media, Panel, Image } from 'react-bootstrap'

class ActionBox extends Component {

  handleClick() {
    this.props.setDisplay(this.props.id)
    this.props.setNav('backJoined', 'ghost')
  }

  handleUnjoin() {
    this.props.unjoinAction(this.props.id)
  }

  render() {
    return (
      <div>
        <Panel className='joinedIndAction'>
          <div className='joinedcontainer'>
            <Link to='/single-action' className='action-box' onClick={ this.handleClick.bind(this)}>
                <Media>
                  <Media.Left align='top'>
                    <Image className='small-action' width={64} height={64} src={ this.props.src } alt='Image' />
                  </Media.Left>
                  <Media.Body>
                    <h6>{ this.props.title }</h6>
                    <p>{ this.props.who }</p>
                  </Media.Body>
                </Media>
              </Link>
            </div>
            <div className='unjoin-btn'>
              <div onClick={ this.handleUnjoin.bind(this) } ><Button bsStyle="danger" bsSize="xsmall">x</Button></div>
            </div>
          </Panel>
      </div>      
      )
  }
}

export default ActionBox