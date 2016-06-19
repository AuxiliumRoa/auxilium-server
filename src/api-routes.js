import { Router } from 'express'

export default function APIRoutes (model) {

	const router = Router()

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

	router.get('/user', (req, res) => {
		console.log('GET /api/user')
		let user = (req.session.passport && req.session.passport.user)
			? { name: req.session.passport.user.name }
			: null
		res.json({ user: user })
	})

	return router

}
