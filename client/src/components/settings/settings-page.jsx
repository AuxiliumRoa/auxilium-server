import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'

const iconsArray = [1, 2, 3]

class SettingsPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Settings</h1>
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

export const SettingsPageContainer = connect(
  mapStateToProps,
  actionCreators
)(SettingsPage)