
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('actions').insert({
      title: 'Samoan Sausage Sizzle',
      who: 'Rata Street School',
      what: 'We need help running a BBQ for fundraising for our school Samoan hockey team.',
      where: 'Fraser Park Hockey Stadium, Lower Hutt',
      when: 'Saturday 2nd of July 2016, 8am',
      why: 'Because we love sossages, Samoans and hockey!',
      image_url: 'http://www.wikihow.com/images/7/72/Grill-Sausage-Step-9-Version-2.jpg'
    }),
    knex('actions').insert({
      title: 'Plant Native Trees',
      who: 'Tree Huggers Collective',
      what: 'We will be dropping packets of soil and seeds along Lambton Quay, guerilla gardening styles. ',
      where: 'Meet near the cenotaph, outside Parliament Grounds, Wellington.',
      when: 'Sunday 21 August 2016, 2pm',
      why: 'We want more greenery to displace concrete in our cities.',
      image_url: 'http://www.pattfoundation.org/wp-content/uploads/2015/04/Earth-Day-and-planting-trees-with-the-Village-Educational-Center-3.jpg'
    }),
    knex('actions').insert({
      title: 'Redux MVC Community Mural',
      who: 'Enspiral Dev Academy',
      what: 'Painting the Cuba Street carpark as a Redux Flow diagram',
      where: 'Top of Cuba Stree, EDA site, Wellington',
      when: 'Saturday 23rd June, 8am',
      why: 'This will be a tangible way of seeing what the hell is going on with Redux!',
      image_url: 'http://static1.squarespace.com/static/53596095e4b0ed47acce7231/t/55cf7a1ae4b0e15e438cec2a/1439674892494/'
    }),
    knex('actions').insert({
      title: 'Build a rock climbing wall.',
      who: 'Levin RSA',
      what: 'Help us build a therapeutic rock climbing wall',
      where: 'Levin RSA, Main Street, Levin',
      when: 'July 14th, meet at the retunda, Main Street.',
      why: 'Increasing mobility in our Returned Service Men is important to us. Rock climbing seems like a good idea, right?',
      image_url: 'https://cdn-images-1.medium.com/max/800/1*QhzCdt2HZGSgcaIcMfsjLA.jpeg'
    }),
    knex('actions').insert({
      title: 'Dig Holes with Us!',
      who: 'Hole Diggers Anonymous',
      what: 'Dig some holes.',
      where: 'Wakefield Park, Island Bay, Wellington',
      when: 'Tuesday 12 July, 2:30am',
      why: 'We habitually love digging holes for the sake of digging holes. Scratch that itch.',
      image_url: 'https://lgoodman222.files.wordpress.com/2015/08/hole-in-the-ground.jpg?w=800&h=600&crop=1'
    }),
    knex('actions').insert({
      title: 'Feed hungry people',
      who: 'Hungry People Feeders',
      what: 'Get some food, give it to some hungry people.',
      where: 'Meet at Stratford New World, Main street, Stratford',
      when: '12 August 2016, 11am.',
      why: 'We like feeding people.',
      image_url: 'http://mediad.publicbroadcasting.net/p/wabe/files/styles/medium/public/hoseafeeds_070715.jpg'
    })
  )
}
