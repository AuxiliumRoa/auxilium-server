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

export function populateActions (provider) {
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

export function setInitialDisplay(action) {
	return (dispatch) => {
		dispatch({
			type: 'SET_INITIAL_DISPLAY',
			displayedAction: action
		})
	}
}
