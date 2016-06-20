import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import IconBox from '../icon-box.jsx'
import { Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

const iconArray = [
  {
    icon: 'fa fa-home fa-3x',
    key: 'home',
    link: '/'
  }
]

class SettingsPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Row className=''>
        <Col sm={12}>
          <IconBox id='settings-nav' icons={ iconArray } />
          <h1>Settings</h1>
          <Link to={ '/addAction' }>
            <Button>Add Action</Button>
          </Link>
        </Col>
      </Row>
      )
  }
}

function mapStateToProps(state) {
  return {
    userName: state.user ? state.user.name : 'Guest',
    actions: state.actions,
    fetchedActions: false,
    displayedAction: state.displayedAction
  }
}

export const SettingsPageContainer = connect(
  mapStateToProps,
  actionCreators
)(SettingsPage)