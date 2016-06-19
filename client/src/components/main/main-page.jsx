import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import MainContainer from './main-container.jsx'
import IconBox from '../icon-box.jsx'
import LikeNoLike from './like-nolike.jsx'

const iconsArray = [1, 2, 3]

class MainPage extends Component {
  constructor(props) {
    super(props)
  }

  incrementDisplayIndex() {
    actionCreators.incrementDisplayIndex()
  }

  render() {
    return (
      <div>
        <IconBox id='main-nav' icons={ iconsArray } />
        <MainContainer title='This is the title of ALL the actions' action={ this.props.actions[this.props.displayedAction] }/>
        <LikeNoLike incrementDisplayIndex={ this.incrementDisplayIndex.bind(this) } />
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

export const MainPageContainer = connect(
  mapStateToProps,
  actionCreators
)(MainPage)