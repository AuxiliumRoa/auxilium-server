import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../redux/action-creators'
import LoginPage from './login/login-page.jsx'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export const AppContainer = connect(
  mapStateToProps,
  actionCreators
)(App)

