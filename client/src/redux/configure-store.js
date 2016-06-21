import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import clone from 'clone'

export default function configureReduxStore (socket) {
	return createStore(reducer, applyMiddleware(thunk, customSocketMiddleware(socket)))
}

const customSocketMiddleware = socket => store => next => action => {
  if (action.sendToServerOverSocket) {
    socket.emit('action', action)
  }
  return next(action)
}
