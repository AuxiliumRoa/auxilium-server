import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'

import IconBox from '../icon-box.jsx'
import JoinedContainer from './joined-container.jsx'

const iconArray = [
  {
    icon: 'fa fa-angle-left fa-3x',
    provider: 'back',
    link: '/'
  },
  {
    icon: 'fa fa-sign-language fa-3x',
    provider: 'logo',
    link: ''
  },
  {
    icon: '',
    provider: 'none',
    link: ''
  }
]
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