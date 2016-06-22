import React, { Component } from 'react'
import Image from '../image.jsx'
import ChatContent from './chat-content.jsx'

class ActionChat extends Component {
	render () {
		return (
			<div>
				<ChatContent user={ this.props.userName } comment={ this.props.comment + ' - ' + this.props.createdAt }/>
			</div>
		)
	}
}

export default ActionChat