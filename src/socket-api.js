import IO from 'socket.io'

export default function configureSocketAPI (server, model) {

	const io = IO(server)

	io.on('connection', (socket) => {
		console.log('SOCKET connection')

		socket.on('request-user', (data) => {
			console.log('SOCKET request-user')
			if (loggedIn(data)) {
				res.json({ user: req.session.passport.user })
			}
		})

		socket.on('request-actions', (data) => {
		console.log('SOCKET request-actions')
		if (loggedIn(data)) {
			model.actions.getNotJoined(req.session.passport.user.id)
				.then((actions) => {
					res.json(actions)
				})
				.catch((error) => {
					handleError(data, error)
				})
			}
		})

		socket.on('request-joined-actions', (data) => {
		console.log('SOCKET request-joined-actions')
		if (loggedIn(data)) {
			model.actions.getJoined(req.session.passport.user.id)
				.then((joinedActions) => {
					res.json(joinedActions)
				})
				.catch((error) => {
					handleError(data, error)
				})
			}
		})

		// socket.on('join-action', (data) => {
		// console.log('SOCKET /api/join-action')
		// if (loggedIn(data)) {
		// 	model.actions.joinAction(req.session.passport.user.id, req.query.id)
		// 		.then((joinedAction) => {
		// 			console.log('joinedAction', joinedAction)
		// 			res.json(joinedAction)
		// 		})
		// 		.catch((error) => {
		// 			handleError(data, error)
		// 		})
		// 	}
		// })

		// socket.on('unjoin-action', (data) => {
		// console.log('SOCKET /api/unjoin-action')
		// if (loggedIn(data)) {
		// 	model.actions.unjoinAction(req.session.passport.user.id, req.query.id)
		// 		.then(() => {
		// 			res.json({ status: 'OK' })
		// 		})
		// 		.catch((error) => {
		// 			handleError(data, error)
		// 		})
		// 	}
		// })

	// function loggedIn (req, res) {
	// 	if (req.session.passport && req.session.passport.user) {
	// 		return true
	// 	} else {
	// 		res.json({ error: 'You must be logged in to access this endpoint.' })
	// 		return false
	// 	}
	// }

		socket.on('action', (reduxAction) => {
			console.log('SOCKET action', reduxAction)

			switch (reduxAction.type) {

				case 'ADD_COMMENT_FROM_CLIENT' :
					socket.broadcast.emit('action', {
						type: 'ADD_COMMENT_FROM_SERVER',
						action: reduxAction.action,
						comment: {
							comment: reduxAction.comment.comment,
							user_id: reduxAction.user.id,
							user_name: reduxAction.user.name
						}
					})
					model.actions.addComment(reduxAction.action.id, reduxAction.user.id, reduxAction.comment.comment)
						.catch((error) => {
							handleError(socket, error)
						})
					break

				case 'ADD_ACTION_FROM_CLIENT' :
					model.actions.addAction(reduxAction.action)
						.then((actionID) => {
							reduxAction.action.id = actionID
							io.emit('action', {
								type: 'ADD_ACTION_FROM_SERVER',
								action: reduxAction.action
							})
						})
						.catch((error) => {
							handleError(socket, error)
						})
					break

			}

		})

		socket.on('disconnect', (data) => {
			console.log('SOCKET disconnect')
		})

	})

	function handleError (socket, error) {
		console.log('Server error:', error)
		socket.emit('error', { error: 'Internal server error.' })
	}

}
