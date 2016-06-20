import request from 'browser-request'

export function populateUser () {
	return (dispatch) => {
		request({
			method: 'GET',
			url: '/api/user'
		}, (err, res, body) => {
			if (noError(err)) {
				dispatch({
					type: 'POPULATE_USER',
					user: JSON.parse(body).user
				})
			}
		})
	}
}

export function populateActions () {
	return (dispatch) => {
		request({
			method: 'GET',
			url: '/api/actions'
		}, (err, res, body) => {
			if (noError(err)) {
			  dispatch({
			    type: 'POPULATE_ACTIONS',
			    actions: JSON.parse(body).actions
			  })
			}
		})
	}
}

export function populateJoinedActions () {
	return (dispatch) => {
		request({
			method: 'GET',
			url: '/api/joined-actions'
		}, (err, res, body) => {
			if (noError(err)) {
			  dispatch({
			    type: 'POPULATE_JOINED_ACTIONS',
			    joinedActions: JSON.parse(body).joinedActions
			  })
			}
		})
	}
}

export function incrementDisplayedAction () {
	return {
		type: 'INCREMENT_DISPLAYED_ACTION'
	}
}

export function joinAction (actionID) {
	return (dispatch) => {
		dispatch({
			type: 'JOIN_ACTION',
			action: { id: actionID }
		})
		request({
			method: 'GET',
			url: '/api/join-action?id=' + actionID
		}, (err, res, body) => {
			if (noError(err)) {
				dispatch({
			    type: 'POPULATE_COMMENTS',
			    action: JSON.parse(body).joinedAction
			  })
			}
		})
	}
}	

export function setDisplayedJoinedAction (actionID) {
  return  {
  	type: 'SET_DISPLAYED_JOINED_ACTION',
  	action: { id: actionID }
  }
}

export function unjoinAction (actionID) {
	return (dispatch) => {
		dispatch({
			type: 'UNJOIN_ACTION',
			action: { id: actionID }
		})
		request({
			method: 'GET',
			url: '/api/unjoin-action?id=' + actionID
		}, (err, res, body) => {
			noError(err)
		})
	}
}

export function addCommentFromClient (actionID, commentText) {
	return (dispatch) => {
		dispatch({
			type: 'SET_CURRENT_COMMENT',
			action: { id: actionID },
			currentComment: ''
		})
		dispatch({
			type: 'ADD_COMMENT_FROM_CLIENT',
			sendToServerOverSocket: true,
			action: { id: actionID },
			comment: { comment: commentText }
		})
		// SOCKET NEEDED HERE!!!!!!!!!!!!!!!!!!!!!
	}
}

export function addCommentFromServer (actionID, comment) {
	return {
		type: 'ADD_COMMENT_FROM_SERVER',
		action: { id: actionID },
		comment: comment
	}
}

export function setCurrentComment (actionID, currentCommentText) {
	return {
		type: 'SET_CURRENT_COMMENT',
		action: { id: actionID },
		currentComment: currentCommentText
	}
}

export function addActionFromClient (action) {
	return (dispatch) => {
		dispatch({
			type: 'ADD_ACTION',
			action: action
		})
		// SOCKET NEEDED HERE!!!!!!!!!!!!!!!!!!!!!
	}
}

export function addActionFromServer (action) {
	return {
		type: 'ADD_ACTION',
		action: action
	}
}

function noError (error) {
	if (error) {
		console.log('Request error:', error)
		return false
	} else {
		return true
	}
}
