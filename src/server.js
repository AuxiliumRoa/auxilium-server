import http from 'http'
import express from 'express'
import session from 'express-session'

const app = express()
const server = http.createServer(app)
const port = 3000

app.use(session({
	secret: 'Auxilium Roa',
  saveUninitialized: true,
  resave: true
}))

app.get('/api/actions', (req, res) => {
	console.log('GET /api/actions')
	res.json({ actions: 'actions' })
})

export default function startServer() {
	server.listen(port, () => {
		console.log('Auxilium Server Application is listening on port', port)
	})
}
