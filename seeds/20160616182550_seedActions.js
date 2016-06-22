
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
    	image_url: 'http://fryphone.com/nzblog/wp-content/uploads/2009/12/img-55391.jpg'
    }),
    knex('actions').insert({
    	title: 'New Downhill Mountain Biking Single Track',
    	who: 'Brooklyn Trail Builders',
    	what: 'Heavy labour track cutting, scrub clearing, and digging in initial prep work for a new track below the Brooklyn Wind Turbine.',
    	where: 'Brooklyn Wind Turbine',
    	when: 'Sunday 26th of June, 10am',
    	why: 'New intermediate trail running below the existing Carparts line.',
    	image_url: 'https://www.mtbproject.com/photos/mtb/13/65/3001365_medium_0b2a401372869908.jpg'
    }),
    knex('actions').insert({
    	title: 'Track Clearing in Zealandia',
    	who: 'Zealandia',
    	what: 'Pruning and clearing back bush which is encroaching onto the walking trails.',
    	where: 'Zealandia (meet inside main entrance)',
    	when: 'Sunday 26th of June, 9am',
    	why: 'Some trails are becoming overgrown.',
    	image_url: 'http://www.radionz.co.nz/assets/galleries/2268/full_IMG_0113.jpg?1325218395'
    })
  )
}
