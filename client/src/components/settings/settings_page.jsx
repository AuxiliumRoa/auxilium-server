import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import { Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

// const iconArray = [
//   {
//     icon: 'fa fa-home fa-3x',
//     key: 'home',
//     link: '/'
//   }
// ]

class SettingsPage extends Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.setNavIcons(null, 'forwardSettings')
  }

  render() {
    return (
      <Row className=''>
        <Col sm={12}>
          <h1>Settings</h1>
          <Link to={ '/addAction' }>
            <Button onClick={ this.handleClick.bind(this) } >Add Action</Button>
          </Link>
        </Col>
      </Row>
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