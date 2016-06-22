import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import MainContainer from './main-container.jsx'
import NoneContainer from './none-container.jsx'
import Spinner from '../spinner.jsx'
import { Row, Panel, Button, Navbar, Nav } from 'react-bootstrap'
import { RouteTransition } from 'react-router-transition'
import LikeNoLike from './likenolike.jsx'

class MainPage extends Component {
  constructor(props) {
    super(props)
  }

  joinDisplayedAction () {
    if (Object.keys(this.props.actions).length > 0) {
      let index = Object.keys(this.props.actions)[this.props.displayedActionIndex]
      this.props.joinAction(this.props.actions[index].id)
    } else {return}
  }

  componentWillUnmount() {
    this.props.updatePreviousPage(this.props.location.pathname)
  }

  render() {
    let action = this.props.actions[Object.keys(this.props.actions)[this.props.displayedActionIndex]]
    let transitionParams = (this.props.previousPage === '/joined-actions')
      ? [{translateX: -100}, {translateX: 100}]
      : [{translateX: 100}, {translateX: -100}]
    return (
      <div>
        <RouteTransition
              pathname={this.props.location.pathname}
              atEnter={transitionParams[0]}
              atLeave={transitionParams[1]}
              atActive={{ translateX: 0 }}
              mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
              >
          <div className='paddingtopbottom'>
            <Panel>
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
            </Panel>
          </div>
        </RouteTransition>
        <LikeNoLike handleClickPass={ this.props.incrementDisplayedAction } handleClickJoin={ this.joinDisplayedAction.bind(this) } />
      </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    actions: state.actions,
    fetchedActions: state.fetchedActions,
    displayedActionIndex: state.displayedActionIndex,
    previousPage: state.previousPage,
    incrementDisplayedAction: state.incrementDisplayedAction
  }
}

export const MainPageContainer = connect(
  mapStateToProps,
  actionCreators
)(MainPage)