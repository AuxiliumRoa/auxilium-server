import clone from 'clone'

const INITIAL_STATE = { 
  user: null,
  actions: {},
  joinedActions: {},
  displayedActionIndex: 0,
  displayedJoinedAction: null,
  fetchedUser: false,
  fetchedActions: false,
  fetchedJoinedActions: false,
  navIcons: {
    left: 'settings',
    right: 'joinedList'
  },
  previousPage: ''
}

export default function reducer (state = INITIAL_STATE, reduxAction) {

  let newState = clone (state)

  // console.log('reducer', reduxAction.type)

  switch (reduxAction.type) {

    case 'SET_NAV_ICONS' :
      newState.navIcons = reduxAction.icons
      break

    case 'UPDATE_PREVIOUS_PAGE' :
      newState.previousPage = reduxAction.url
      break

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
        newState.joinedActions[action.id].currentComment = ''
        newState.joinedActions[action.id].fetchedComments = true
      })
      newState.fetchedJoinedActions = true
      break

    case 'INCREMENT_DISPLAYED_ACTION' :
      newState.displayedActionIndex = (Object.keys(state.actions).length > 0)
        ? (state.displayedActionIndex + 1) % Object.keys(state.actions).length
        : 0
      break

    case 'JOIN_ACTION' :
      newState.joinedActions[reduxAction.action.id] = state.actions[reduxAction.action.id]
      newState.joinedActions[reduxAction.action.id].comments = []
      newState.joinedActions[reduxAction.action.id].currentComment = ''
      newState.joinedActions[reduxAction.action.id].fetchedComments = false
      delete newState.actions[reduxAction.action.id]
      newState.displayedActionIndex = (Object.keys(newState.actions).length > 0)
        ? state.displayedActionIndex % Object.keys(newState.actions).length
        : 0
      break

    case 'POPULATE_COMMENTS' :
      newState.joinedActions[reduxAction.action.id].comments = reduxAction.action.comments
      newState.joinedActions[reduxAction.action.id].fetchedComments = true
      break

    case 'SET_DISPLAYED_JOINED_ACTION' :
      newState.displayedJoinedAction = reduxAction.action.id
      break

    case 'UNJOIN_ACTION' :
      newState.actions[reduxAction.action.id] = state.joinedActions[reduxAction.action.id]
      delete newState.joinedActions[reduxAction.action.id]
      delete newState.actions[reduxAction.action.id].comments
      delete newState.actions[reduxAction.action.id].currentComment
      delete newState.actions[reduxAction.action.id].fetchedComments
      break

    case 'ADD_COMMENT_FROM_CLIENT' :
      newState.joinedActions[reduxAction.action.id].currentComment = ''
      reduxAction.comment.user_id = state.user.id
      reduxAction.comment.user_name = state.user.name
      newState.joinedActions[reduxAction.action.id].comments.push(reduxAction.comment)
      break

    case 'ADD_COMMENT_FROM_SERVER' :
      if (newState.joinedActions.hasOwnProperty(reduxAction.action.id)) {
        newState.joinedActions[reduxAction.action.id].comments.push(reduxAction.comment)
      }
      break

    case 'SET_CURRENT_COMMENT' :
      newState.joinedActions[reduxAction.action.id].currentComment = reduxAction.currentComment
      break

    case 'ADD_ACTION_FROM_CLIENT' :
      newState.fetchedActions = false
      break

    case 'ADD_ACTION_FROM_SERVER' :
      newState.actions[reduxAction.action.id] = reduxAction.action
      break

    case 'ADD_CLIENT_ACTION_FROM_SERVER' :
      newState.actions[reduxAction.action.id] = reduxAction.action
      newState.displayedActionIndex = Object.keys(newState.actions).indexOf(reduxAction.action.id + '')
      newState.fetchedActions = true
      break

  }

  return newState

}