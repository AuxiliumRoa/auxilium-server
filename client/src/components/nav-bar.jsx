import React, { Component } from 'react'
import * as actionCreators from '../redux/action-creators'
import { connect } from 'react-redux'
import Icon from './icon.jsx'
import { Navbar, Nav } from 'react-bootstrap'

const icons = {
  settings: {
    icon: 'fa fa-cog fa-lg',
    key: 'settings',
    link: '/settings',
    reset: [null, 'forwardMain'] 
  }, 
  joinedList: {
    icon: 'fa fa-list fa-lg',
    key: 'joined',
    link: '/joined-actions',
    reset: ['backMain', null]
  }, 
  backMain: {
    icon: 'fa fa-angle-left fa-lg',
    key: 'back',
    link: '/',
    reset: ['settings', 'joinedList']
  }, 
  backJoined: {
    icon: 'fa fa-angle-left fa-lg',
    key: 'back',
    link: '/joined-actions',
    reset: ['backMain', null]
  },
  forwardSettings: {
    icon: 'fa fa-angle-right fa-lg',
    key: 'forward',
    link: '/settings',
    reset: [null, 'forwardMain']
  },
  forwardMain: {
    icon: 'fa fa-angle-right fa-lg',
    key: 'forward',
    link: '/',
    reset: ['settings', 'joinedList']
  }
}

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  handleClickLeft() {
    let leftIcon = icons[this.props.icons.left].reset[0]
    let rightIcon = icons[this.props.icons.left].reset[1]
    this.props.setNavIcons(leftIcon, rightIcon)
  }

  handleClickRight() {
    let leftIcon = icons[this.props.icons.right].reset[0]
    let rightIcon = icons[this.props.icons.right].reset[1]
    this.props.setNavIcons(leftIcon, rightIcon)
  }

  render() {
    return (
      <Navbar fixedTop>
        <Nav>
        {
          (this.props.icons.left) 
            ? <Icon key={ icons[this.props.icons.left].key + '-icon' } 
                    icon={ icons[this.props.icons.left].icon } 
                    link={ icons[this.props.icons.left].link }
                    handleClick={ this.handleClickLeft.bind(this) } />
            : null
        }
        <img className='nav-logo' src='/images/pitch-in-logo-spade.png'/>
        {
          (this.props.icons.right)
            ? <Icon key={ icons[this.props.icons.right].key + '-icon' } 
                    icon={ icons[this.props.icons.right].icon } 
                    link={ icons[this.props.icons.right].link } 
                    handleClick={ this.handleClickRight.bind(this) }/>
            : null
        }
        </Nav>
      </Navbar>
    )
  }

}

function mapStateToProps(state) {
  return {
    icons: state.navIcons
  }
}

export const NavBarContainer = connect(
  mapStateToProps,
  actionCreators
)(NavBar)
