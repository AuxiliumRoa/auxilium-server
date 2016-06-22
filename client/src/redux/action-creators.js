export function setNavIcons (left, right) {
	return {
		type: 'SET_NAV_ICONS',
		icons: { left, right }
	}
}
export function updatePreviousPage(url) {
	return {
		type: 'UPDATE_PREVIOUS_PAGE',
		url
	}
}

export function incrementDisplayedAction () {
	return {
		type: 'INCREMENT_DISPLAYED_ACTION'
	}
}

export function joinAction (actionID) {
	return {
		type: 'JOIN_ACTION',
		sendToServerOverSocket: true,
		action: { id: actionID }
	}
}	

export function setDisplayedJoinedAction (actionID) {
  return  {
  	type: 'SET_DISPLAYED_JOINED_ACTION',
  	action: { id: actionID }
  }
}

export function unjoinAction (actionID) {
	return {
		type: 'UNJOIN_ACTION',
		sendToServerOverSocket: true,
		action: { id: actionID }
	}
}

export function addCommentFromClient (actionID, commentText) {
	return {
		type: 'ADD_COMMENT_FROM_CLIENT',
		sendToServerOverSocket: true,
		action: { id: actionID },
		comment: {
			comment: commentText,
			created_at: (new Date()).toString()
		}
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
	return {
		type: 'ADD_ACTION_FROM_CLIENT',
		sendToServerOverSocket: true,
		action: action
	}
}
