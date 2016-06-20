import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { populateUser, populateActions, populateJoinedActions } from './redux/action-creators'
import configureReduxStore from './redux/configure-store'
import App from './components/app.jsx' 
import { MainPageContainer } from './components/main/main-page.jsx'
import { JoinedPageContainer } from './components/joined_actions/joined-page.jsx'
import { ActionChatPageContainer } from './components/actions_info_chat/action-chat-page.jsx'
import { SettingsPageContainer } from './components/settings/settings_page.jsx'
import AddAction from './components/settings/add_action.jsx'
import io from 'socket.io-client'

const store = configureReduxStore()

console.log('store', store.getState())

store.subscribe(() => {
	console.log('store', store.getState())
})

store.dispatch(populateUser())
store.dispatch(populateActions())
store.dispatch(populateJoinedActions())

const router = (
  <Router history={ browserHistory }>    
    <Route path='/' component={ App }>
      <IndexRoute component={ MainPageContainer } />
      <Route path='/joined-actions' component={ JoinedPageContainer } />
      <Route path='/single-action' component={ ActionChatPageContainer } />
      <Route path='/settings' component={ SettingsPageContainer } />
      <Route path='/addaction' component={ AddAction } />
    </Route>
  </Router>
)

render(
  <Provider store={store}>
    { router }
  </Provider>,
  document.getElementById('app')
)

const socket = io()

console.log('Cient about to emit hello down the socket')
socket.emit('hello', { message: 'hello hello', array: [1, 2, 3] })
