'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = configureSocketAPI;
function configureSocketAPI(io, model) {

	io.on('connection', function (socket) {
		console.log('SOCKET connection');

		socket.on('request-user', function () {
			console.log('SOCKET request-user');
			if (loggedIn(socket)) {
				socket.emit('action', {
					type: 'POPULATE_USER',
					user: socket.request.session.passport.user
				});
			}
		});

		socket.on('request-actions', function () {
			console.log('SOCKET request-actions');
			if (loggedIn(socket)) {
				model.actions.getNotJoined(socket.request.session.passport.user.id).then(function (actions) {
					socket.emit('action', {
						type: 'POPULATE_ACTIONS',
						actions: actions
					});
				}).catch(function (error) {
					handleError(socket, error);
				});
			}
		});

		socket.on('request-joined-actions', function () {
			console.log('SOCKET request-joined-actions');
			if (loggedIn(socket)) {
				model.actions.getJoined(socket.request.session.passport.user.id).then(function (joinedActions) {
					socket.emit('action', {
						type: 'POPULATE_JOINED_ACTIONS',
						joinedActions: joinedActions
					});
				}).catch(function (error) {
					handleError(socket, error);
				});
			}
		});

		socket.on('action', function (reduxAction) {
			console.log('SOCKET action handling', reduxAction ? reduxAction.type : undefined);

			if (loggedIn(socket)) {
				switch (reduxAction.type) {

					case 'JOIN_ACTION':
						model.actions.joinAction(socket.request.session.passport.user.id, reduxAction.action.id).then(function (joinedAction) {
							socket.emit('action', {
								type: 'POPULATE_COMMENTS',
								action: joinedAction
							});
						}).catch(function (error) {
							handleError(socket, error);
						});
						break;

					case 'UNJOIN_ACTION':
						model.actions.unjoinAction(socket.request.session.passport.user.id, reduxAction.action.id).catch(function (error) {
							handleError(data, error);
						});
						break;

					case 'ADD_COMMENT_FROM_CLIENT':
						socket.broadcast.emit('action', {
							type: 'ADD_COMMENT_FROM_SERVER',
							action: reduxAction.action,
							comment: {
								comment: reduxAction.comment.comment,
								user_id: socket.request.session.passport.user.id,
								user_name: socket.request.session.passport.user.name
							}
						});
						model.actions.addComment(reduxAction.action.id, socket.request.session.passport.user.id, reduxAction.comment.comment).catch(function (error) {
							handleError(socket, error);
						});
						break;

					case 'ADD_ACTION_FROM_CLIENT':
						model.actions.addAction(reduxAction.action).then(function (actionID) {
							console.log('ADD AN ACTION HEREE LOOK HERE', actionID);
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
			}
		});

		socket.on('disconnect', function (data) {
			console.log('SOCKET disconnect');
		});
	});

	function loggedIn(socket) {
		if (socket.request.session.passport && socket.request.session.passport.user) {
			return true;
		} else {
			console.log('Server error: Socket accessed without a logged in session.');
			socket.emit({ error: 'You must be logged in to access this socket.' });
			return false;
		}
	}

	function handleError(socket, error) {
		console.log('Server error:', error);
		socket.emit('error', { error: 'Internal server error.' });
	}
}