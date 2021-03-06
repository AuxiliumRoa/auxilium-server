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
import { AddActionContainer } from './components/settings/add_action.jsx'
import io from 'socket.io-client'

const socket = io()
const store = configureReduxStore(socket)

console.log('store', store.getState())

store.subscribe(() => {
	console.log('store', store.getState())
})

socket.on('action', (action) => {
  store.dispatch(action)
})

socket.emit('request-user', {})
socket.emit('request-actions', {})
socket.emit('request-joined-actions', {})

const router = (
  <Router history={ browserHistory }>    
    <Route path='/' component={ App }>
      <IndexRoute component={ MainPageContainer } />
      <Route path='/joined-actions' component={ JoinedPageContainer } />
      <Route path='/single-action' component={ ActionChatPageContainer } />
      <Route path='/settings' component={ SettingsPageContainer } />
      <Route path='/add-action' component={ AddActionContainer } />
    </Route>
  </Router>
)

render(
  <Provider store={store}>
    { router }
  </Provider>,
  document.getElementById('app')
)
