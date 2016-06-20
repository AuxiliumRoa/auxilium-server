'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = APIRoutes;

var _express = require('express');

function APIRoutes(model) {

	var router = (0, _express.Router)();

	router.get('/user', function (req, res) {
		console.log('GET /api/user');
		if (loggedIn(req, res)) {
			res.json({ user: req.session.passport.user });
		}
	});

	router.get('/actions', function (req, res) {
		console.log('GET /api/actions');
		if (loggedIn(req, res)) {
			model.actions.getNotJoined(req.session.passport.user.id).then(function (actions) {
				res.json(actions);
			}).catch(function (error) {
				handleError(req, res, error);
			});
		}
	});

	router.get('/joined-actions', function (req, res) {
		console.log('GET /api/joined-actions');
		if (loggedIn(req, res)) {
			model.actions.getJoined(req.session.passport.user.id).then(function (joinedActions) {
				res.json(joinedActions);
			}).catch(function (error) {
				handleError(req, res, error);
			});
		}
	});

	router.get('/join-action', function (req, res) {
		console.log('GET /api/join-action');
		if (loggedIn(req, res)) {
			model.actions.joinAction(req.session.passport.user.id, req.query.id).then(function (joinedAction) {
				console.log('joinedAction', joinedAction);
				res.json(joinedAction);
			}).catch(function (error) {
				handleError(req, res, error);
			});
		}
	});

	router.get('/unjoin-action', function (req, res) {
		console.log('GET /api/unjoin-action');
		if (loggedIn(req, res)) {
			model.actions.unjoinAction(req.session.passport.user.id, req.query.id).then(function () {
				res.json({ status: 'OK' });
			}).catch(function (error) {
				handleError(req, res, error);
			});
		}
	});

	function loggedIn(req, res) {
		if (req.session.passport && req.session.passport.user) {
			return true;
		} else {
			res.json({ error: 'You must be logged in to access this endpoint.' });
			return false;
		}
	}

	function handleError(req, res, err) {
		console.log('Server error:', err);
		res.json({ error: 'Internal server error.' });
	}

	return router;
}