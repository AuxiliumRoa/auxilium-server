import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import MainContainer from './main-container.jsx'
import LikeNoLike from './like-nolike.jsx'
import NoneContainer from './none-container.jsx'
import Spinner from '../spinner.jsx'
import { Row, Panel, Button } from 'react-bootstrap'
// import Button from '../button.jsx'

// const iconArray = [
//   {
//     icon: 'fa fa-cog fa-3x',
//     key: 'settings',
//     link: '/settings'
//   },
//   {
//     icon: 'fa fa-sign-language fa-3x',
//     key: 'logo',
//     link: '/'
//   },
//   {
//     icon: 'fa fa-list fa-3x',
//     key: 'joined',
//     link: '/joined-actions'
//   }
// ]

class MainPage extends Component {
  constructor(props) {
    super(props)
  }

  joinDisplayedAction () {
    console.log('ACTIONS IN JOINDISPLAYED METHOD', this.props.actions)
    if (Object.keys(this.props.actions).length > 0) {
      let index = Object.keys(this.props.actions)[this.props.displayedActionIndex]
      this.props.joinAction(this.props.actions[index].id)
    } else {
      console.log('Sorry, nothing to join here!')
    }
  }

  render() {
    let action = this.props.actions[Object.keys(this.props.actions)[this.props.displayedActionIndex]]
    return (
      <Panel>
        <div>
          {
            (this.props.fetchedActions)
              ? <div>
                {
                  (Object.keys(this.props.actions).length > 0)
                    ? <MainContainer 
                        title='This is the title of ALL the actions' 
                        action={ action }
                        handleLeftSwipe={ this.props.incrementDisplayedAction }
                        handleRightSwipe={ this.joinDisplayedAction.bind(this) } />
                    : <NoneContainer />
                }
                </div>
              : <Spinner />
          }
        </div>
        <div>
          <Row className='btnRow'>
            <Button className='btn btn-default' onClick={ this.props.incrementDisplayedAction }>PASS</Button> 
            <Button className='btn btn-default' onClick={ this.joinDisplayedAction.bind(this) }>PARTICIPATE</Button>
          </Row>
        </div>
      </Panel>
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