import passport from 'passport'
import TwitterStrategy from 'passport-twitter'
import FaceBookStrategy from 'passport-facebook'

export default function configurePassport (app) {

  const rootURL = (environment === 'production')
    ? 'https://auxiliumroa.herokuapp.com'
    : 'http://localhost:3000'  

  passport.use(new TwitterStrategy({
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: rootURL + '/auth/twitter/cb'
    }, (token, tokenSecret, profile, callback) => {
      console.log('TwitterStrategy callback', profile)
      return callback(null, {
        oauthID: profile.id,
        oauthProvider: 'twitter',
        name: profile.displayName
      })
    })
  )

  passport.use(new FaceBookStrategy({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: rootURL + '/auth/facebook/cb'
    }, (accessToken, refreshToken, profile, callback) => {
      console.log('FaceBookStrategy callback', profile)
      return callback(null, {
        oauthID: profile.id,
        oauthProvider: 'facebook',
        name: profile.displayName
      })
    })
  )

  passport.serializeUser((user, callback) => {
    console.log('serializeUser', user)
    callback(null, user)
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
        res.redirect('/api/user')
      })
    
  })

}
