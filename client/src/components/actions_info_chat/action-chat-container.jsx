import React, { Component } from 'react'
import SmallTitle from '../small-title.jsx'
import ActionChat from './action-chat.jsx'


class ActionChatContainer extends Component {
	render () {
		return (
			<div>
        <SmallTitle />
        <ActionChat />
      </div>
		)
	}
}

export default ActionChatContainer