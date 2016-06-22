import React, { Component } from 'react'

class ChatContent extends Component {
	render () {
		return(
      <div>
        <span className='titleSpan'>{this.props.user }:</span>
  			<p className='chat-message'>{ this.props.comment }</p> 
      </div>
		)
	}
}

export default ChatContent