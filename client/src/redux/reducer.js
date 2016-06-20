import clone from 'clone'

const INITIAL_STATE = { 
  user: null,
  actions: {},
  joinedActions: {},
  displayedAction: 0,
  displayedJoinedAction: 0,
  fetchedUser: false,
  fetchedActions: false,
  fetchedJoinedActions: false,
}

export default function reducer (state = INITIAL_STATE, reduxAction) {

  let newState = clone (state)

  switch (reduxAction.type) {

    case 'POPULATE_USER' : 
      newState.user = reduxAction.user
      newState.fetchedUser = true
      break

    case 'POPULATE_ACTIONS' :
      reduxAction.actions.forEach((action) => {
        newState.actions[action.id] = action
      })
      newState.fetchedActions = true
      break

    case 'POPULATE_JOINED_ACTIONS' :
      reduxAction.joinedActions.forEach((action) => {
        newState.joinedActions[action.id] = action
      })
      newState.fetchedJoinedActions = true
      break

    case 'INCREMENT_DISPLAYED_ACTION' :
      newState.displayedAction = (state.displayedAction + 1) % Object.keys(state.actions).length
      break

    case 'JOIN_ACTION' :
      newState.joinedActions[reduxAction.action.id] = state.actions[reduxAction.action.id]
      newState.joinedActions[reduxAction.action.id].comments = reduxAction.action.comments
      newState.joinedActions[reduxAction.action.id].currentComment = ''
      delete newState.actions[reduxAction.action.id]
      newState.displayedAction = state.displayedAction % Object.keys(newState.actions).length
      break

    case 'SET_DISPLAYED_JOINED_ACTION' :
      break

    case 'UNJOIN_ACTION' :
      break

    case 'ADD_COMMENT' :
      break

    case 'SET_CURRENT_COMMENT' :
      break

    case 'ADD_ACTION' :
      break

  }

  return newState

}