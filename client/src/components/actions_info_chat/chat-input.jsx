import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

class ChatInput extends Component {

  handleChange(e) {
    this.props.setCurrentComment(this.props.actionID, e.target.value)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addComment(this.props.actionID, this.props.currentComment)
  }

  render () {
    return (
      <div>
        <Navbar fixedBottom>
          <Nav>
            <form onSubmit={ this.handleSubmit.bind(this)} >
              <input className='chatInput' 
                type='text' 
                placeholder='enter message' 
                value={ this.props.currentComment } 
                onChange={ this.handleChange.bind(this) } />
            </form>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default ChatInput