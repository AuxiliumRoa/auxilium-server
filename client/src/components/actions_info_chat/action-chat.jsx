import React, { Component } from 'react'
import Image from '../image.jsx'
import ChatContent from './chat-content.jsx'

class ActionChat extends Component {
	render () {
		return (
			<div>
				<Image src={ this.props.src }/>
				<ChatContent message={ this.props.message }/>
			</div>
		)
	}
}

export default ActionChat