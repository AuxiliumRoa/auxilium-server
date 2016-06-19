import React, { Component } from 'react'
import SmallTitle from '../small-title.jsx'
import ActionChat from './action-chat.jsx'
import ChatInput from './chat-input.jsx'

const chatArray = ['Hi Everyone', "What's up?", 'Who the hell are you?', "Pick up your floorbags, you're not living in South East Asia"]


class ActionChatContainer extends Component {
	render () {
		return (
			<div>
        <SmallTitle title='ChatBox'/>
        {
          chatArray.map((e) => {
            return <ActionChat src='' message={ e } />
          })
        }
        <ChatInput />
      </div>
		)
	}
}

export default ActionChatContainer