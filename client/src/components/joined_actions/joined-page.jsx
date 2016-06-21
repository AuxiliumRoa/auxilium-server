import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import JoinedContainer from './joined-container.jsx'
import { Row, Col, Button } from 'react-bootstrap'
import { RouteTransition } from 'react-router-transition'

class JoinedPage extends Component {
  render() {
    return (

      <RouteTransition
            pathname={this.props.location.pathname}
            atEnter={{ translateX: 100 }}
            atLeave={{ translateX: -100 }}
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
    userName: state.user ? state.user.name : 'Guest',
    joinedActions: state.joinedActions
  }
}

export const JoinedPageContainer = connect(
  mapStateToProps,
  actionCreators
)(JoinedPage)