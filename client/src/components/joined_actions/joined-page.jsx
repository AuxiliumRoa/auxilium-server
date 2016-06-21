import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import JoinedContainer from './joined-container.jsx'
import { RouteTransition } from 'react-router-transition'

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
      <RouteTransition
            pathname={this.props.location.pathname}
            atEnter={{ translateX: 100 }}
            atLeave={{ translateX: -100 }}
            atActive={{ translateX: 0 }}
            mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
            >
        <JoinedContainer 
          actions={ this.props.joinedActions } 
          setDisplay={ this.props.setDisplayedJoinedAction }
          setNav={ this.props.setNavIcons }
          unjoinAction={ this.props.unjoinAction } />
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