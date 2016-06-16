exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('actions').del(),
    knex('actions').insert({
    	title: 'Clean Lyall Bay',
    	who: 'Lyall Bay Surf Club',
    	what: 'We\'ll walk the beach to one end and back picking up litter and rubbish, then coffee at Maranui afterwards.',
    	where: 'Lyall Bay (meet on the road outside Maranui Cafe)',
    	when: 'Saturday 25th of June, 9am',
    	why: 'Because we love our beach!',
    	image_url: 'http://www.rowansims.com/wp-content/uploads/2014/03/maranui-cafe-lyall-bay-sunrise.jpg'
    }),
    knex('actions').insert({
    	title: 'New Downhill Mountain Biking Single Track',
    	who: 'Brooklyn Trail Builders',
    	what: 'Heavy labour track cutting, scrub clearing, and digging in initial prep work for a new track below the Brooklyn Wind Turbine.',
    	where: 'Brooklyn Wind Turbine',
    	when: 'Sunday 26th of June, 10am',
    	why: 'New intermediate trail running below the existing Carparts line.',
    	image_url: 'http://www.wmtbc.org.nz/Resources/Pictures/newsletterphotos/clinical.jpg'
    }),
    knex('actions').insert({
    	title: 'Track Clearing in Zealandia',
    	who: 'Zealandia',
    	what: 'Pruning and clearing back bush which is encroaching onto the walking trails.',
    	where: 'Zealandia (meet inside main entrance)',
    	when: 'Sunday 26th of June, 9am',
    	why: 'Some trails are becoming overgrown.',
    	image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Prosthemadera_novaeseelandiae_-Karori_Wildlife_Sanctuary,_Wellington,_New_Zealand-8.jpg'
    })
  )
}
