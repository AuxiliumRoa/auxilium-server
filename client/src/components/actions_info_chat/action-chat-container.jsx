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
            <SmallTitle title='Talk to others involved:'/>
            {
              (this.props.action.fetchedComments && (this.props.action.comments.length > 0))
                ? <div>
                  {
                    this.props.action.comments.map((e) => {
                      console.log('COMMENTS', this.props.action, 'COMMENT (e)', e)
                      return <ActionChat userName={ e.user_name } comment={ e.comment } createdAt={ e.created_at }/>
                    this.props.action.comments.map((e, i) => {
                      return <ActionChat key={e.user_name + i} userName={ e.user_name } comment={ e.comment } />

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