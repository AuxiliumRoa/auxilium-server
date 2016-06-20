import React, { Component } from 'react'

class ChatInput extends Component {
  
  handleChange(e) {
    console.log(e.target.value)
    this.props.setCurrentComment(this.props.actionID, e.target.value)
  }

  handleSubmit() {
    this.props.addComment(this.props.actionID, e.target.value)
  }

  render () {
    return (
      <input 
        type='text' 
        placeholder='enter message' 
        value={ this.props.currentComment } 
        onChange={ this.handleChange.bind(this) } 
        onSubmit={ this.handleSubmit.bind(this)} />
    )
  }
}

export default ChatInput