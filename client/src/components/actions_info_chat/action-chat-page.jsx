import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import MainContainer from '../main/main-container.jsx'
import ActionChatContainer from './action-chat-container.jsx'
import IconBox from '../icon-box.jsx'
import Spinner from '../spinner.jsx'

const iconArray = [
  {
    icon: 'fa fa-angle-left fa-3x',
    provider: 'back',
    link: '/joined-actions'
  },
  {
    icon: 'fa fa-sign-language fa-3x',
    provider: 'logo',
    link: ''
  },
  {
    icon: 'fa fa-home fa-3x',
    provider: 'home',
    link: '/'
  }
]

class ActionChatPage extends Component {
		render() {
      let action = this.props.joinedActions[this.props.displayedJoinedAction]
			return(
				<div>
					<IconBox id='action-chat-nav' icons={ iconArray }/>
          {
            (action) 
             ? <div>
      					<MainContainer title='This is the title of the action' action={ action } />
      					<ActionChatContainer 
                  action={ action } 
                  setCurrentComment={ this.props.setCurrentComment } 
                  addComment={ this.props.addCommentFromClient } />
              </div>
            : <Spinner />
          }
				</div>
			)
		}
}

function mapStateToProps(state) {
  return {
    joinedActions: state.joinedActions,
    displayedJoinedAction: state.displayedJoinedAction
  }
}

export const ActionChatPageContainer = connect(
  mapStateToProps,
  actionCreators
)(ActionChatPage)