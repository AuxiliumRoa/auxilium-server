import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import JoinedContainer from './joined-container.jsx'
import { Row, Col, Button } from 'react-bootstrap'

// const iconArray = [
//   {
//     icon: 'fa fa-angle-left fa-3x',
//     provider: 'back',
//     link: '/'
//   },
//   {
//     icon: 'fa fa-sign-language fa-3x',
//     provider: 'logo',
//     link: ''
//   },
//   {
//     icon: '',
//     provider: 'none',
//     link: ''
//   }
// ]

class JoinedPage extends Component {
  render() {
    return (
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