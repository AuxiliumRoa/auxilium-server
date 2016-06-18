import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { setUser, populateActions } from './redux/action-creators'
import configureReduxStore from './redux/configure-store'
import App from './components/app.jsx' 
import LoginPage from './components/login/login-page.jsx'
import { MainPageContainer } from './components/main/main-page.jsx'
import { JoinedPageContainer } from './components/joined_actions/joined-page.jsx'

const store = configureReduxStore()

console.log('store', store.getState())

store.subscribe(() => {
	console.log('store', store.getState())
})

store.dispatch(setUser())
store.dispatch(populateActions())

// const history = syncHistoryWithStore(browserHistory, store)
const router = (
  <Router history={ browserHistory }>    
    <Route path='/' component={ App }>
      <IndexRoute component={ LoginPage } />
      <Route path='/main' component={ MainPageContainer } />
      <Route path='/joined-actions' component={ JoinedPageContainer } />
    </Route>
  </Router>
)

render(
  <Provider store={store}>
    { router }
  </Provider>,
  document.getElementById('app')
)
