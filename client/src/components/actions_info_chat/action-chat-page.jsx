import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import MainContainer from '../main/main-container.jsx'
import ActionChatContainer from './action-chat-container.jsx'
import Spinner from '../spinner.jsx'
import { RouteTransition } from 'react-router-transition'

class ActionChatPage extends Component {
		render() {
      let action = this.props.joinedActions[this.props.displayedJoinedAction]
			return(
				<RouteTransition
            pathname={this.props.location.pathname}
            atEnter={{ translateX: 100 }}
            atLeave={{ translateX: -100 }}
            atActive={{ translateX: 0 }}
            mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
            >
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
				</RouteTransition>
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