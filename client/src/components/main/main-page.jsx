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

  render() {
    return (
      <div>
        <IconBox id='main-nav' icons={ iconsArray } />
        <MainContainer action={ displayedAction }/>
        <LikeNoLike />
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    userName: state.user ? state.user.name : 'Guest',
    actions: state.actions,
    displayedAction: state.displayedAction
  }
}

export const MainPageContainer = connect(
  mapStateToProps,
  actionCreators
)(MainPage)