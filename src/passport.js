import passport from 'passport'
import TwitterStrategy from 'passport-twitter'
import FaceBookStrategy from 'passport-facebook'

export default function configurePassport (app) {

  passport.use(new TwitterStrategy({
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: 'http://localhost:3000/auth/twitter/cb'
    }, (token, tokenSecret, profile, callback) => {
      console.log('TwitterStrategy callback', profile)
      return callback(null, profile)
    })
  )

  passport.use(new FaceBookStrategy({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:3000/auth/facebook/cb'
    }, (accessToken, refreshToken, profile, callback) => {
      console.log('FaceBookStrategy callback', profile)
      return callback(null, profile)
    })
  )

  passport.serializeUser((user, callback) => {
    console.log('serializeUser', user)
    callback(null, { facebookId: user.id, name: user.displayName })
  })

  passport.deserializeUser((obj, callback) => {
    console.log('deserializeUser', obj)
    callback(null, obj)
  })

  app.use(passport.initialize())
  app.use(passport.session())

  ;['twitter', 'facebook'].forEach((strategy) => {

    app.get('/auth/' + strategy,
      passport.authenticate(strategy))

    app.get('/auth/' + strategy + '/cb',
      passport.authenticate(strategy, { failureRedirect: '/auth/' + strategy }),
      (req, res) => {
        res.redirect('/')
      })
    
  })

}
