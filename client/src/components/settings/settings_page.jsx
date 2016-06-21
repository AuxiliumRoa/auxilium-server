import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import { Button, Row, Col, Panel } from 'react-bootstrap'
import { Link } from 'react-router'
import { RouteTransition } from 'react-router-transition'

class SettingsPage extends Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.setNavIcons(null, 'forwardSettings')
  }

  handleLogout() {
    console.log('User wants to logout')
  }

  render() {
    return (
      <RouteTransition
            pathname={this.props.location.pathname}
            atEnter={{ translateX: -100 }}
            atLeave={{ translateX: 100 }}
            atActive={{ translateX: 0 }}
            mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
            >
          <Row className=''>
            <Col sm={12}>
              <h1>Settings</h1>
            </Col>
          </Row>
        <Panel>
        <Row className=''>
            <Col sm={12}>
          <Link to={ '/add-action' }>
            <Button onClick={ this.handleClick.bind(this) }>Add Action</Button>
          </Link>
            </Col>
          </Row>
          <Link to={ '/auth/logout'}>
            <Button onClick={ this.handleLogout.bind(this) }>Logout</Button>
          </Link>
        </Panel>
      </RouteTransition>
      )
  }
}

function mapStateToProps(state) {
  return {
    userName: state.user ? state.user.name : 'Guest',
  }
}

export const SettingsPageContainer = connect(
  mapStateToProps,
  actionCreators
)(SettingsPage)