import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import JoinedContainer from './joined-container.jsx'
import { Row, Col, Button } from 'react-bootstrap'
import { RouteTransition } from 'react-router-transition'

class JoinedPage extends Component {

  componentWillUnmount() {
    this.props.updatePreviousPage(this.props.location.pathname)
  }

  render() {
    let transitionParams = (this.props.previousPage === '/single-action')
      ? [{translateX: -100}, {translateX: 100}]
      : [{translateX: 100}, {translateX: -100}]
    return (

      <RouteTransition
            pathname={this.props.location.pathname}
            atEnter={transitionParams[0]}
            atLeave={transitionParams[1]}
            atActive={{ translateX: 0 }}
            mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
            >
        <div className='paddingtop'>
          <Row>
            <Col sm={12}>
              <JoinedContainer 
                actions={ this.props.joinedActions } 
                setDisplay={ this.props.setDisplayedJoinedAction }
                setNav={ this.props.setNavIcons }
                unjoinAction={ this.props.unjoinAction } />
            </Col>
          </Row>
        </div>
      </RouteTransition>
    )
  }
}

function mapStateToProps(state) {
  return {
    joinedActions: state.joinedActions,
    previousPage: state.previousPage
  }
}

export const JoinedPageContainer = connect(
  mapStateToProps,
  actionCreators
)(JoinedPage)