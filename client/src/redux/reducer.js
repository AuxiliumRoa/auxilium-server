import clone from 'clone'

const INITIAL_STATE = { 
  user: null,
  actions: []
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
  }
  return newState
}