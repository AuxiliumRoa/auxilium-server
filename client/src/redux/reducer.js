import clone from 'clone'

const INITIAL_STATE = { 
  user: null,
  actions: [],
  joinedActions: [],
  displayedAction: 0,
  fetchedActions: false
}

export default function reducer (state = INITIAL_STATE, action) {

  let newState = clone (state)

  switch (action.type) {

    case 'SET_USER' : 
      newState.user = action.user
      if (newState.user && newState.actions.length > 0) {
        newState.fetchedActions = true
      }
      break

    case 'POPULATE_ACTIONS' :
      newState.actions = action.actions
      if (newState.user && newState.actions.length > 0) {
        newState.fetchedActions = true
      }
      break

    case 'POPULATE_JOINED_ACTIONS' :
      newState.joinedActions = action.joinedActions
      break

    case 'INCREMENT_DISPLAYED_ACTION' :
      newState.displayedAction = (state.displayedAction + 1) % state.actions.length
      break

    case 'ADD_JOINED_ACTION' :
      newState.joinedActions = state.joinedActions.concat(action.action)
      break

  }

  return newState

}