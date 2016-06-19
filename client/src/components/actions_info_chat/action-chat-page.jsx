import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import MainContainer from '../main/main-container.jsx'
import ActionChatContainer from './action-chat-container.jsx'
import IconBox from '../icon-box.jsx'

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