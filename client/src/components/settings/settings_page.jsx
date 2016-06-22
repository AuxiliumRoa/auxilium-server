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
    this.props.setNavIcons('ghost', 'forwardSettings')
  }

  componentWillUnmount() {
    this.props.updatePreviousPage(this.props.location.pathname)
  }

  render() {
    let transitionParams = (this.props.previousPage === '/')
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
          <Row className='' id='settings-heading'>
            <Col sm={12}>
              <h1>Settings</h1>
              <h4>Hi {this.props.userName}!</h4>
            </Col>
          </Row>
        <Row className=''>
            <Col sm={12}>
          <Link to='/add-action'>
            <Button onClick={ this.handleClick.bind(this) } id='add-action-btn' className='settings-btn'>Add Action</Button>
          </Link>
            </Col>
          </Row>
          <a href='/auth/logout'>
            <Button className='settings-btn' id='logout-btn'>Logout</Button>
          </a>
      </RouteTransition>
      )
  }
}

function mapStateToProps(state) {
  return {
    userName: state.user ? state.user.name : 'Guest',
    previousPage: state.previousPage
  }
}

export const SettingsPageContainer = connect(
  mapStateToProps,
  actionCreators
)(SettingsPage)