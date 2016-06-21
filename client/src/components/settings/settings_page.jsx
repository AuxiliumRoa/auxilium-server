import React, { Component } from 'react'
import * as actionCreators from '../../redux/action-creators'
import { connect } from 'react-redux'
import { Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import { RouteTransition } from 'react-router-transition'

class SettingsPage extends Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.setNavIcons(null, 'forwardSettings')
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
          <Link to={ '/add-action' }>
            <Button onClick={ this.handleClick.bind(this) } >Add Action</Button>
          </Link>
        </Col>
      </Row>
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