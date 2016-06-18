import React, { Component } from 'react'
import MainContainer from '../main/main-container.jsx'
import ActionChatContainer from './action-chat-container.jsx'
import IconBox from '../icon-box.jsx'

class ActionsPage extends Component {
		render() {
			return(
				<div>
					<IconBox />
					<MainContainer />
					<ActionChatContainer />
				</div>
			)
		}
}

export default ActionsPage