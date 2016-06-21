'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = configureSocketAPI;

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureSocketAPI(server, model) {

	var io = (0, _socket2.default)(server);

	io.on('connection', function (socket) {
		console.log('Server Socket: connection');

		socket.on('action', function (action) {
			console.log('Server Socket: action', action);
			//save to db
			var response = {};
			switch (action.type) {
				case 'ADD_COMMENT_FROM_CLIENT':
					response.type = 'ADD_COMMENT_FROM_SERVER';
					response.action = action.action;
					response.comment = action.comment;
					response.comment.user_id = action.user.id;
					response.comment.user_name = action.user.name;
					break;
			}
			socket.broadcast.emit('action', response);
		});

		socket.on('disconnect', function (data) {
			console.log('Server Socket: disconnect');
		});
	});
}