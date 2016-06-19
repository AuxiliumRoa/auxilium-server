import React, { Component } from 'react'

class ChatContent extends Component {
	render () {
		return(
			<p className='chat-message'>{ this.props.message }</p> 
		)
	}
}

export default ChatContent