'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = startServer;

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _passport = require('./passport');

var _passport2 = _interopRequireDefault(_passport);

var _socketApi = require('./socket-api');

var _socketApi2 = _interopRequireDefault(_socketApi);

var _apiRoutes = require('./api-routes');

var _apiRoutes2 = _interopRequireDefault(_apiRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var app = (0, _express2.default)();
var server = _http2.default.createServer(app);
var port = process.env.PORT || 3000;
var model = (0, _model2.default)(process.env.NODE_ENV);

app.use(_express2.default.static(_path2.default.join(__dirname, '../public')));

app.use((0, _expressSession2.default)({
	secret: 'Auxilium Roa',
	saveUninitialized: true,
	resave: true
}));

(0, _passport2.default)(app, model);
(0, _socketApi2.default)(server, model);

app.use('/api', (0, _apiRoutes2.default)(model));

app.get('*', function (req, res) {
	if (req.session.passport && req.session.passport.user) {
		console.log('GET * serving main.html');
		res.sendFile(_path2.default.join(__dirname, '../public/main.html'));
	} else {
		console.log('GET * serving login.html');
		res.sendFile(_path2.default.join(__dirname, '../public/login.html'));
	}
});

function startServer() {
	server.listen(port, function () {
		console.log('Auxilium Server Application is listening on port', port);
	});
}