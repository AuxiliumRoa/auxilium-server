import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../redux/action-creators'
import LoginPage from './login/login-page.jsx'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { MainPageContainer } from './main/main-page.jsx'
import { JoinedPageContainer } from './joined_actions/joined-page.jsx'

const router = (
  <Router history={ browserHistory }>    
    <Route path='/' component={ MainPageContainer } />
    <Route path='/joined-actions' component={ JoinedPageContainer } />
  </Router>
)

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('rendering App, user:', this.props.user)
    return (
      <div>
        { this.props.user ? router : <LoginPage /> }
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

