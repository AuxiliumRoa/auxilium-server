import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import MainContainer from './main-container.jsx'
import NoneContainer from './none-container.jsx'
import Spinner from '../spinner.jsx'
import { Row, Panel, Button, Navbar } from 'react-bootstrap'
import { Row, Panel, Button } from 'react-bootstrap'
import { RouteTransition } from 'react-router-transition'

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
      <RouteTransition
            pathname={this.props.location.pathname}
            atEnter={{ translateX: 100 }}
            atLeave={{ translateX: -100 }}
            atActive={{ translateX: 0 }}
            mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
            >
        <div className='paddingtopbottom'>
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
          </Panel>
            <div>
              <Navbar fixedBottom clear>
                <Row className='btnRow'>
                  <Button bsStyle="warning" className='btn btn-default' onClick={ this.props.incrementDisplayedAction }>PASS</Button> 
                  <Button bsStyle="success" className='btn btn-default' onClick={ this.joinDisplayedAction.bind(this) }>JOIN</Button>
                </Row>
              </Navbar>  
            </div>
        </div>
      </RouteTransition>
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