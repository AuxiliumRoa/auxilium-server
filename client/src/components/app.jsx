import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginPage from './login/login-page.jsx'
import JoinedPage from './joined_actions/joined-page.jsx'
import MainPage from './main/main-page.jsx'
import * as actionCreators from '../redux/action-creators'

class App extends Component {
  constructor(props) {
    super(props)
  }

  login(provider) {
    console.log(provider, 'has been clicked')
    this.props.login()
  }

  // render() {
  //   return (
  //     <LoginPage id={ this.props.userName } login={ this.login.bind(this) }/>
  //   )
  // }

  // render() {
  //   return (
  //     <JoinedPage />
  //   )
  // }
  render() {
    return (
      <MainPage />
      )
  }
}

function mapStateToProps(state) {
  return {
    userName: state.user ? state.user.name : 'John Doe'
  }
}

export const AppContainer = connect(
  mapStateToProps,
  actionCreators
)(App)

