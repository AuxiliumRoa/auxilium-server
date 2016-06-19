import { Router } from 'express'

export default function APIRoutes (model) {

	const router = Router()

	router.get('/user', (req, res) => {
		console.log('GET /api/user')
		if (loggedIn(req, res)) {
			res.json({ user: req.session.passport.user })
		}
	})

	router.get('/actions', (req, res) => {
		console.log('GET /api/actions')
		if (loggedIn(req, res)) {
			model.actions.getNotJoined(req.session.passport.user.id)
				.then((actions) => {
					res.json(actions)
				})
				.catch((error) => {
					handleError(req, res, error)
				})
		}
	})

	router.get('/joined-actions', (req, res) => {
		console.log('GET /api/joined-actions')
		if (loggedIn(req, res)) {
			model.actions.getJoined(req.session.passport.user.id)
				.then((joinedActions) => {
					res.json(joinedActions)
				})
				.catch((error) => {
					handleError(req, res, error)
				})
		}
	})

	router.get('/join-action', (req, res) => {
		console.log('GET /api/join-action')
		if (loggedIn(req, res)) {
			model.actions.joinAction(req.session.passport.user.id, req.query.id)
				.then((joinedAction) => {
					res.json(joinedAction)
				})
				.catch((error) => {
					handleError(req, res, error)
				})
		}
	})

	function loggedIn (req, res) {
		if (req.session.passport && req.session.passport.user) {
			return true
		} else {
			res.json({ error: 'You must be logged in to access this endpoint.' })
			return false
		}
	}

	function handleError (req, res, err) {
		console.log('Server error:', err)
		res.json({ error: 'Internal server error.' })
	}

	return router

}
