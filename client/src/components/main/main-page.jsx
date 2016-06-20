import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import MainContainer from './main-container.jsx'
import IconBox from '../icon-box.jsx'
import LikeNoLike from './like-nolike.jsx'
import NoneContainer from './none-container.jsx'
import Spinner from '../spinner.jsx'
import { Row } from 'react-bootstrap'

const iconArray = [
  {
    icon: 'fa fa-cog fa-3x',
    key: 'settings',
    link: '/settings'
  },
  {
    icon: 'fa fa-sign-language fa-3x',
    key: 'logo',
    link: '/'
  },
  {
    icon: 'fa fa-list fa-3x',
    key: 'joined',
    link: '/joined-actions'
  }
]

class MainPage extends Component {
  constructor(props) {
    super(props)
  }

  joinDisplayedAction () {
    if (Object.keys(this.props.actions) > 0) {
      let index = Object.keys(this.props.actions)[this.props.displayedActionIndex]
      this.props.joinAction(this.props.actions[index].id)
    } else {
      console.log('Sorry, nothing to join here!')
    }
  }

  render() {
    let action = this.props.actions[Object.keys(this.props.actions)[this.props.displayedActionIndex]]
    console.log('ACTIONS', this.props.actions)
    return (
      <Row className='navRow'>
      <div className='navContainer'>
        <IconBox id='main-nav' icons={ iconArray } />
        {
          this.props.fetchedActions ? 
          <div>
          {
            (Object.keys(this.props.actions).length > 0)
              ? <MainContainer title='This is the title of ALL the actions' action={ action }/>
              : <NoneContainer />
          } 
          </div> :
          <Spinner />
        }
        <LikeNoLike like={ this.joinDisplayedAction.bind(this) } nolike={ this.props.incrementDisplayedAction } />
      </div>
      </Row>
      )
  }
}

function mapStateToProps(state) {
  return {
    userName: state.user ? state.user.name : 'Guest',
    actions: state.actions,
    fetchedActions: state.fetchedActions,
    displayedActionIndex: state.displayedActionIndex
  }
}

export const MainPageContainer = connect(
  mapStateToProps,
  actionCreators
)(MainPage)