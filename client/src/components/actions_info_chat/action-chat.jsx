import React, { Component } from 'react'
import Image from '../image.jsx'
import ChatContent from './chat-content.jsx'

class ActionChat extends Component {
	render () {
		return (
			<div>
				<ChatContent comment={ this.props.userName + ': ' + this.props.comment }/>
			</div>
		)
	}
}

export default ActionChat