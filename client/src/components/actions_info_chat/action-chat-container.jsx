import React, { Component } from 'react'
import SmallTitle from '../small-title.jsx'
import ActionChat from './action-chat.jsx'
import Spinner from '../spinner.jsx'

class ActionChatContainer extends Component {
	render () {
		return (
			<div>
            <SmallTitle title='Talk to others involved:'/>
            {
              (this.props.action.fetchedComments && (this.props.action.comments.length > 0))
                ? <div>
                  {
                    this.props.action.comments.map((e, i) => {
                      return <ActionChat key={e.user_name + i} userName={ e.user_name } comment={ e.comment } createdAt={ e.created_at }/>
                    })
                  }
                  </div>
                : <Spinner />
            }
      </div>
		)
	}
}

export default ActionChatContainer
