import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import MainContainer from '../main/main-container.jsx'
import ActionChatContainer from './action-chat-container.jsx'
import ChatInput from './chat-input.jsx'
import Spinner from '../spinner.jsx'
import { RouteTransition } from 'react-router-transition'
import { Panel, PanelGroup, Row } from 'react-bootstrap'

class ActionChatPage extends Component {
		render() {
      let action = this.props.joinedActions[this.props.displayedJoinedAction]
			return(
        <div>
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
                  <PanelGroup defaultActiveKey='0' accordion>
                    <Panel className='paddingtop' header={ action.title } eventKey='1'>
            					<MainContainer action={ action } />
                    </Panel>
                  </PanelGroup>
                    <Panel header='Chat' >
                      <ActionChatContainer 
                      action={ action } />
                    </Panel>
              </div>
              : <Spinner />
            }
  				</RouteTransition>
          <ChatInput 
              currentComment={ action.currentComment } 
              setCurrentComment={ this.props.setCurrentComment } 
              addComment={ this.props.addCommentFromClient } 
              actionID={ action.id } />
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