import passport from 'passport'
import TwitterStrategy from 'passport-twitter'
import FaceBookStrategy from 'passport-facebook'
import LinkedInStrategy from 'passport-linkedin'

export default function configurePassport (app, model) {

  passport.use(new TwitterStrategy({
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: process.env.ROOT_URL + '/auth/twitter/cb'
    }, (token, tokenSecret, profile, callback) => {
      // console.log('TwitterStrategy callback', profile)
      return callback(null, {
        oAuthProvider: 'twitter',
        oAuthID: profile.id,
        oAuthName: profile.displayName
      })
    })
  )

  passport.use(new FaceBookStrategy({
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: process.env.ROOT_URL + '/auth/facebook/cb'
    }, (accessToken, refreshToken, profile, callback) => {
      // console.log('FaceBookStrategy callback', profile)
      return callback(null, {
        oAuthProvider: 'facebook',
        oAuthID: profile.id,
        oAuthName: profile.displayName
      })
    })
  )

  passport.use(new LinkedInStrategy({
      consumerKey: process.env.LINKEDIN_API_KEY,
      consumerSecret: process.env.LINKEDIN_SECRET_KEY,
      callbackURL: process.env.ROOT_URL + '/auth/linkedin/cb'
    }, (token, tokenSecret, profile, callback) => {
      // console.log('LinkedInStrategy callback', profile)
      return callback(null, {
        oAuthProvider: 'linkedin',
        oAuthID: profile.id,
        oAuthName: profile.displayName
      })
    })
  )

  passport.serializeUser((oAuthUser, callback) => {
    // console.log('serializeUser', oAuthUser)
    model.users.getOrCreate(oAuthUser.oAuthProvider, oAuthUser.oAuthID, oAuthUser.oAuthName)
      .then((user) => {
        callback(null, user)
      })
  })

  passport.deserializeUser((obj, callback) => {
    // console.log('deserializeUser', obj)
    callback(null, obj)
  })

  app.use(passport.initialize())
  app.use(passport.session())

  ;['twitter', 'facebook' , 'linkedin'].forEach((strategy) => {

    app.get('/auth/' + strategy,
      passport.authenticate(strategy))

    app.get('/auth/' + strategy + '/cb',
      passport.authenticate(strategy, { failureRedirect: '/auth/' + strategy }),
      (req, res) => {
        res.redirect('/')
      })
    
  })

  app.get('/auth/logout', (req, res, next) => {
    req.session.destroy((err) => {
      console.log('Server error:', err)
    })
    res.redirect('/')
  })

}
