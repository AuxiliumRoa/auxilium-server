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
		console.log('SOCKET connection');

		socket.on('action', function (reduxAction) {
			console.log('SOCKET action', reduxAction);

			switch (reduxAction.type) {

				case 'ADD_COMMENT_FROM_CLIENT':
					socket.broadcast.emit('action', {
						type: 'ADD_COMMENT_FROM_SERVER',
						action: reduxAction.action,
						comment: {
							comment: reduxAction.comment.comment,
							user_id: reduxAction.user.id,
							user_name: reduxAction.user.name
						}
					});
					model.actions.addComment(reduxAction.action.id, reduxAction.user.id, reduxAction.comment.comment).catch(function (error) {
						handleError(socket, error);
					});
					break;

				case 'ADD_ACTION_FROM_CLIENT':
					model.actions.addAction(reduxAction.action).then(function (actionID) {
						reduxAction.action.id = actionID;
						io.emit('action', {
							type: 'ADD_ACTION_FROM_SERVER',
							action: reduxAction.action
						});
					}).catch(function (error) {
						handleError(socket, error);
					});
					break;

			}
		});

		socket.on('disconnect', function (data) {
			console.log('SOCKET disconnect');
		});
	});

	function handleError(socket, error) {
		console.log('Server error:', error);
		socket.emit('error', { error: 'Internal server error.' });
	}
}