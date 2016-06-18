import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureReduxStore from './redux/configure-store'
import { AppContainer } from './components/app.jsx'
import { login } from './redux/action-creators'
import LoginPage from './components/login/login-page.jsx'
import MainPage from './components/main/main-page.jsx'
import JoinedPage from './components/joined_actions/joined-page.jsx'

const store = configureReduxStore()

console.log(store.getState())

store.subscribe(() => {
	console.log(store.getState())
})

store.dispatch(login())

// const router = (
//   <Router history={browserHistory}>
//     <Route path='/' component={App}>
//       <IndexRoute component={LoginPage}></IndexRoute>
//       <Route path='/main' component={MainPage}></Route>
//       <Route path='/joined-actions' component={JoinedMain}></Route>
//     </Route>
//   </Router>
// )

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
)
