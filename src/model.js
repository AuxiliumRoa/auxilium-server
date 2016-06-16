import knexOptions from '../knexfile'
import Knex from 'knex'
import DB from './db'

export default function Model (environment) {

	const knex = Knex(knexOptions[environment || 'development'])
	const db = DB(knex)

	return {

		getActions: () => {
			return db.getActions()
		}

	}

}
