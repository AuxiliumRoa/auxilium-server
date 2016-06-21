import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import clone from 'clone'

export default function configureReduxStore (socket) {
	return createStore(reducer, applyMiddleware(customSocketMiddleware(socket)))
}

const customSocketMiddleware = socket => store => next => action => {
  if (action.sendToServerOverSocket) {
    socket.emit('action', action)
  }
  return next(action)
}
