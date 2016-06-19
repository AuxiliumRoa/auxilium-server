
import dotenv from 'dotenv'
import path from 'path'
import http from 'http'
import express from 'express'
import session from 'express-session'
import Model from './model'
import configurePassport from './passport'
import APIRoutes from './api-routes'

dotenv.config()

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3000
const model = Model(process.env.NODE_ENV)

app.use(express.static(path.join(__dirname, '../public')))

app.use(session({
	secret: 'Auxilium Roa',
  saveUninitialized: true,
  resave: true
}))

configurePassport(app, model)

app.use('/api', APIRoutes(model))

app.get('*', (req, res) => {
	if (req.session.passport && req.session.passport.user) {
		console.log('GET * serving main.html')
		res.sendFile(path.join(__dirname, '../public/main.html'))
	} else {
		console.log('GET * serving login.html')
		res.sendFile(path.join(__dirname, '../public/login.html'))
	}
})

export default function startServer() {
	server.listen(port, () => {
		console.log('Auxilium Server Application is listening on port', port)
	})
}
