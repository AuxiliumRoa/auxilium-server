import clone from 'clone'

const INITIAL_STATE = { 
  user: null,
  actions: [],
  displayedAction: {}
}

export default function reducer (state = INITIAL_STATE, action) {
  let newState = clone (state)
  switch (action.type) {
    case 'SET_USER' : 
      newState.user = action.user
      break
    case 'POPULATE_ACTIONS' :
      newState.actions = action.actions
      break
    case 'SET_INITIAL_DISPLAY' :
      newState.displayedAction = action.displayedAction
      break
    case 'SET_NEW_DISPLAY_ACTION' :
      newState.displayedAction = action.displayedAction
  }
  return newState
}