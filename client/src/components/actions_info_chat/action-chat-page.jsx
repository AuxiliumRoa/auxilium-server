import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import MainContainer from '../main/main-container.jsx'
import ActionChatContainer from './action-chat-container.jsx'
import IconBox from '../icon-box.jsx'

const iconArray = [1, 2, 3]

class ActionChatPage extends Component {
		render() {
			return(
				<div>
					<IconBox id='action-chat-nav' icons={ iconArray }/>
					<MainContainer title='This is the title of the action'/>
					<ActionChatContainer />
				</div>
			)
		}
}

function mapStateToProps(state) {
  return {
    userName: state.user ? state.user.name : 'Guest',
    actions: state.actions,
    fetchedActions: false,
    displayedAction: state.displayedAction
  }
}

export const ActionChatPageContainer = connect(
  mapStateToProps,
  actionCreators
)(ActionChatPage)