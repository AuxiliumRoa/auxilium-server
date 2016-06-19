import knexOptions from '../knexfile'
import Knex from 'knex'
import Users from './model/users'
import Actions from './model/actions'

export default function Model (environment) {

	const knex = Knex(knexOptions[environment || 'development'])

	return {

		users: Users(knex),
		actions: Actions(knex)

	}

}
