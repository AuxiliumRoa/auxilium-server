
import dotenv from 'dotenv'
import http from 'http'
import express from 'express'
import session from 'express-session'
import Model from './model'
import configurePassport from './passport'

dotenv.config()

const app = express()
const server = http.createServer(app)
const port = 3000
const model = Model(process.env.NODE_ENV)

app.use(session({
	secret: 'Auxilium Roa',
  saveUninitialized: true,
  resave: true
}))

configurePassport(app)

app.get('/api/actions', (req, res) => {
	console.log('GET /api/actions')
	model.getActions()
		.then((actions) => {
			res.json(actions)
		})
		.catch((error) => {
			console.log('Error during model.getActions():', error)
			res.json({ error: 'Server error.' })
		})
})

app.get('/', (req, res) => {
	console.log('GET /')
	res.json({ hello: 'Hello', passport: req.session.passport })
})

export default function startServer() {
	server.listen(port, () => {
		console.log('Auxilium Server Application is listening on port', port)
	})
}
