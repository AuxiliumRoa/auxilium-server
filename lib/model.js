'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Model;

var _knexfile = require('../knexfile');

var _knexfile2 = _interopRequireDefault(_knexfile);

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _users = require('./model/users');

var _users2 = _interopRequireDefault(_users);

var _actions = require('./model/actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Model(environment) {

	var knex = (0, _knex2.default)(_knexfile2.default[environment || 'development']);

	return {

		users: (0, _users2.default)(knex),
		actions: (0, _actions2.default)(knex)

	};
}