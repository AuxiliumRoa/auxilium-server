import React, { Component } from 'react'

class ChatInput extends Component {

  handleChange(e) {
    console.log('The input: ', e.target.value)
    this.props.setCurrentComment(this.props.actionID, e.target.value)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addComment(this.props.actionID, this.props.currentComment)
  }

  render () {
    return (
      <form onSubmit={ this.handleSubmit.bind(this)} >
        <input 
          type='text' 
          placeholder='enter message' 
          value={ this.props.currentComment } 
          onChange={ this.handleChange.bind(this) } />
      </form>
    )
  }
}

export default ChatInput