import React, { Component } from 'react'

class ChatContent extends Component {
	render () {
		return(
			<p className='chat-message'>{ this.props.comment }</p> 
		)
	}
}

export default ChatContent