import dotenv from 'dotenv'
import path from 'path'
import http from 'http'
import express from 'express'
import Session from 'express-session'
import IO from 'socket.io'
import Model from './model'
import configurePassport from './passport'
import configureSocketAPI from './socket-api'

dotenv.config()

const app = express()
const server = http.createServer(app)
const io = IO(server)
const port = process.env.PORT || 3000
const model = Model(process.env.NODE_ENV)

const session = Session({
	secret: 'Auxilium Roa',
  saveUninitialized: true,
  resave: true
})

app.use(express.static(path.join(__dirname, '../public')))

io.use((socket, next) => {
    session(socket.request, socket.request.res, next)
})

app.use(session)

configurePassport(app, model)
configureSocketAPI(io, model)

app.get('*', (req, res, next) => {
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
