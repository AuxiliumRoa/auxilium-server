import React, { Component } from 'react'
import SmallTitle from '../small-title.jsx'
import ActionChat from './action-chat.jsx'
import ChatInput from './chat-input.jsx'
import Spinner from '../spinner.jsx'

class ActionChatContainer extends Component {

  formatTimestamp (createdAt) {
    let now = (new Date()).toString().split(' ')
    let then = createdAt.split(' ')
    if (then[3] !== now[3]) {
      // Wed Jun 22, 2015
      return then[0] + ' ' + then[1] + ' ' + then[2] + ', ' + then[3]
    } else if ((now[1] !== then[1]) || (now[2] !== then[2])) {
      // Wed Jun 22
      return then[0] + ' ' + then[1] + ' ' + then[2]
    }
    let nowTime = now[4].split(':')
    let thenTime = then[4].split(':')
    let differenceInMinutes = ((nowTime[0] - thenTime[0]) * 60) + (nowTime[1] - thenTime[1])
    if (differenceInMinutes >= 60) {
      return 'Today ' + ((thenTime[0] % 12) + ((thenTime[0] > 11) ? 'pm' : 'am')).replace('0', '12')
    } else {
      return differenceInMinutes + ' minutes ago'
    }
  }

	render () {
		return (
			<div>
            <SmallTitle title='Talk to others involved:'/>
            {
              (this.props.action.fetchedComments && (this.props.action.comments.length > 0))
                ? <div>
                  {
                    this.props.action.comments.map((e, i) => {
                      return <ActionChat key={e.user_name + i} userName={ e.user_name } comment={ e.comment } createdAt={ this.formatTimestamp(e.created_at) }/>
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
