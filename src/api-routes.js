import { Router } from 'express'

export default function APIRoutes (model) {

	const router = Router()

	router.get('/user', (req, res) => {
		console.log('GET /api/user')
		let user = (req.session.passport && req.session.passport.user)
			? { name: req.session.passport.user.name }
			: null
		res.json({ user: { name: user.name } })
	})

	router.get('/actions', (req, res) => {
		console.log('GET /api/actions')
		model.actions.getAll()
			.then((actions) => {
				res.json(actions)
			})
			.catch((error) => {
				console.log('Error during model.actions.getAll():', error)
				res.json({ error: 'Server error.' })
			})
	})

	router.get('/joined-actions', (req, res) => {
		console.log('GET /api/joined-actions')
		if (req.session.passport && req.session.passport.user) {
			model.actions.getJoined(req.session.passport.user.id)
				.then((joinedActions) => {
					res.json(joinedActions)
				})
				.catch((error) => {
					console.log('Error during model.actions.getJoined():', error)
					res.json({ error: 'Server error.' })
				})
		} else {
			res.json({ error: 'Server error: Not logged in.' })
		}
	})

	return router

}
