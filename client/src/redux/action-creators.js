import request from 'browser-request'
// import request from 'superagent'
// import request from 'request'

// export function setUser (user) {
//   return {
//     type: 'SET_USER',
//     user: user
//   }
// }

// export function login () {
// 	return (dispatch) => {
// 		request
// 			.get('http://localhost:3000/api/user')
// 			.set('Access-Control-Allow-Origin', 'http://localhost')
// 			.set('Access-Control-Allow-Credentials')
// 			.type('json')
// 			.withCredentials()
// 			.end((err, res) => {
// 				console.log('ERROR', err)
// 				console.log('RESPONSE', res)
// 				// dispatch({
// 				// 	type: 'SET_USER',
// 				// 	user: JSON.parse(body).user
// 				// })
// 			})
// 	}
// }

export function login () {
	return (dispatch) => {
		request({
			method: 'GET',
			url: '/api/user'
		}, (err, res, body) => {
		// 	console.log('ERR', err)
		// 	console.log('RES', res)
			console.log('BODY', body)
			dispatch({
				type: 'SET_USER',
				user: JSON.parse(body).user
			})
		})
	}
}

// export function login () {
// 	return (dispatch) => {
// 		request({
// 			url: '/api/user',
// 			followAllRedirects: true,
// 			jar: true
// 		}, (err, res, body) => {
// 			console.log('ERR', err)
// 			console.log('RES', res)
// 			console.log('BODY', body)
// 			dispatch({
// 				type: 'SET_USER',
// 				user: JSON.parse(body).user
// 			})
// 		})
// 	}
// }

export function populateActions (provider) {
	return (dispatch) => {
		request({
			method: 'GET',
			url: '/api/actions'
		}, (err, res, body) => {
		  dispatch({
		    type: 'POPULATE_ACTIONS',
		    actions: JSON.parse(body).actions
		  })
		})
	}
}
