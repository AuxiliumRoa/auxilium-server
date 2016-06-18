import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import JoinedContainer from './joined-container.jsx'
import IconBox from '../icon-box.jsx'

const iconArray = [1, 2, 3]
const joinedActionsArray = ['Planting trees', 'Eating icecream', 'sleeping']

class JoinedPage extends Component {
  render() {
    return (
      <div>
        <IconBox id='joined-nav' icons={ iconArray }/>
        <JoinedContainer actions={ joinedActionsArray }/>
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    userName: state.user ? state.user.name : 'Guest',
    actions: state.actions
  }
}

export const JoinedPageContainer = connect(
  mapStateToProps,
  actionCreators
)(JoinedPage)