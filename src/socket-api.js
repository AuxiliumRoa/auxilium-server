import IO from 'socket.io'

export default function configureSocketAPI (server, model) {

	const io = IO(server)

	io.on('connection', (socket) => {
		console.log('Server Socket: connection')

		socket.on('action', (action) => {
			console.log('Server Socket: action', action)
			//save to db
			let response = {}
			switch (action.type) {
				case 'ADD_COMMENT_FROM_CLIENT':
					response.type = 'ADD_COMMENT_FROM_SERVER'
					response.action = action.action
					response.comment = action.comment
					response.comment.user_id = action.user.id
					response.comment.user_name = action.user.name
					break
			}
			socket.broadcast.emit('action', response)
		})

		socket.on('disconnect', (data) => {
			console.log('Server Socket: disconnect')
		})

	})

}
