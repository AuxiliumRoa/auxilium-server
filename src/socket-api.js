import IO from 'socket.io'

export default function configureSocketAPI (server, model) {

	const io = IO(server)

	io.on('connection', (socket) => {
		console.log('SOCKET connection')

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
