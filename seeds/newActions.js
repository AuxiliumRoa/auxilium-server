
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('actions').del(),
    knex('actions').insert({
      title: 'Samoan Sossage Sizzle',
      who: 'Rata Street School',
      what: 'We need help running a BBQ for fundraising for our school Samoan hockey team.'
      where: 'Fraser Park Hockey Stadium, Lower Hutt',
      when: 'Saturday 2nd of July 2016, 8am',
      why: 'Because we love sossages, Samoans and hockey!',
      image_url: 'http://www.ratastreet.school.nz/DataStore/Pages/PAGE_1/Docs/Documents/IMG_0754.JPG'
    }),
    knex('actions').insert({
      title: 'Plant Native Trees',
      who: 'Tree Huggers Collective',
      what: 'We will be dropping packets of soil and seeds along Lambton Quay, guerilla gardening styles. ',
      where: 'Meet near the cenotaph, outside Parliament Grounds, Wellington.',
      when: 'Sunday 21 August 2016, 2pm',
      why: 'We want more greenery to displace concrete in our cities.',
      image_url: 'http://www.guerrillagardening.org/guerrillagardening/ggorphaned.jpg'
    }),
    knex('actions').insert({
      title: 'Redux MVC Community Mural',
      who: 'Enspiral Dev Academy',
      what: 'Painting the Cuba Street carpark as a Redux Flow diagram',
      where: 'Top of Cuba Stree, EDA site, Wellington',
      when: 'Saturday 23rd June, 8am',
      why: 'This will be a tangible way of seeing what the hell is going on with Redux!',
      image_url: 'http://hackers.weareimpero.com/content/images/2016/02/MVC.jpg'
    }),
    knex('actions').insert({
      title: 'Build a rock climbing wall.',
      who: 'Levin RSA',
      what: 'Help us build a therapeutic rock climbing wall',
      where: 'Levin RSA, Main Street, Levin',
      when: 'July 14th, meet at the retunda, Main Street.',
      why: 'Increasing mobility in our Returned Service Men is important to us. Rock climbing seems like a good idea, right?',
      image_url: 'http://www.rockandice.com/Article-Images/News-Photos/Sept-2014/ChrisBoningtonOldManOfHoy.jpg'
    }),
    knex('actions').insert({
      title: 'Dig Holes with Us!',
      who: 'Hole Diggers Anonymous',
      what: 'Dig some holes.',
      where: 'Wakefield Park, Island Bay, Wellington',
      when: 'Tuesday 12 July, 2:30am',
      why: 'We habitually love digging holes for the sake of digging holes. Scratch that itch.',
      image_url: 'http://cdn2.caninejournal.com/wp-content/uploads/dog-digging-hole.jpg'
    }),
    knex('actions').insert({
      title: 'Feed hungry people',
      who: 'Hungry People Feeders',
      what: 'Get some food, give it to some hungry people.',
      where: 'Meet at Stratford New World, Main street, Stratford',
      when: '12 August 2016, 11am.',
      why: 'We like feeding people.',
      image_url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS4fQpR1ULTyqDU71c-tSIMLYJ6pzqJxNBFL_n7K5_3yUYlnppJ8Q'
    }),
  );
};
