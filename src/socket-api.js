import IO from 'socket.io'

export default function configureSocketAPI (server, model) {

	const io = IO(server)

	io.on('connection', (socket) => {
		console.log('Server Socket: connection')

		socket.on('hello', (data) => {
			console.log('Server Socket: hello', data)
		})

		socket.on('disconnect', (data) => {
			console.log('Server Socket: disconnect')
		})

	})

}
