import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'
import Icon from './icon.jsx'
import { Navbar, Nav } from 'react-bootstrap'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Navbar >
        <Nav>
          {
            this.props.icons.map((icon) => {
              return <Icon key={ icon.key + '-icon' } icon={ icon.icon } link={ icon.link } />
            })
          }
        </Nav>
      </Navbar>
    )
  }

}

function mapStateToProps(state) {
  return {
    icons: state.displayedIcons
  }
}

export const NavBarContainer = connect(
  mapStateToProps,
  actionCreators
)(NavBar)
