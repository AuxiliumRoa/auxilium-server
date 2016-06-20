import React, { Component } from 'react'
import SmallTitle from '../small-title.jsx'
import ActionChat from './action-chat.jsx'
import ChatInput from './chat-input.jsx'
import Spinner from '../spinner.jsx'

const chatArray = ['Hi Everyone', "What's up?", 'Who the hell are you?', "Pick up your floorbags, you're not living in South East Asia"]


class ActionChatContainer extends Component {
	render () {
		return (
			<div>
        <SmallTitle title='ChatBox'/>
        {
          (this.props.action.fetchedComments)
            ? <div>
              {
                this.props.action.comments.map((e) => {
                  return <ActionChat userName={ e.user_name } comment={ e.comment } />
                })
              }
              </div>
            : <Spinner />
        }
        <ChatInput 
          currentComment={ this.props.action.currentComment } 
          setCurrentComment={ this.props.setCurrentComment } 
          addComment={ this.props.addComment } 
          actionID={ this.props.action.id } />
      </div>
		)
	}
}

export default ActionChatContainer