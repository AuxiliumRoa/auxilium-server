import request from 'browser-request'

export function setUser () {
	return (dispatch) => {
		request({
			method: 'GET',
			url: '/api/user'
		}, (err, res, body) => {
			dispatch({
				type: 'SET_USER',
				user: JSON.parse(body).user
			})
		})
	}
}

export function populateActions () {
	return (dispatch) => {
		request({
			method: 'GET',
			url: '/api/actions'
		}, (err, res, body) => {
		  dispatch({
		    type: 'POPULATE_ACTIONS',
		    actions: JSON.parse(body).actions
		  })
		})
	}
}

export function populateJoinedActions () {
	return (dispatch) => {
		request({
			method: 'GET',
			url: '/api/joined-actions'
		}, (err, res, body) => {
		  dispatch({
		    type: 'POPULATE_JOINED_ACTIONS',
		    joinedActions: JSON.parse(body).actions
		  })
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
		request({
			method: 'GET',
			url: '/api/join-action?id=' + actionID
		}, (err, res, body) => {
			dispatch({
				type: 'ADD_JOINED_ACTION',
				action: JSON.parse(body).action
			})
		})
	}
}
