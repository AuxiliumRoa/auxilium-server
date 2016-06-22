'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configurePassport;

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportTwitter = require('passport-twitter');

var _passportTwitter2 = _interopRequireDefault(_passportTwitter);

var _passportFacebook = require('passport-facebook');

var _passportFacebook2 = _interopRequireDefault(_passportFacebook);

var _passportLinkedin = require('passport-linkedin');

var _passportLinkedin2 = _interopRequireDefault(_passportLinkedin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configurePassport(app, model) {

  _passport2.default.use(new _passportTwitter2.default({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: process.env.ROOT_URL + '/auth/twitter/cb'
  }, function (token, tokenSecret, profile, callback) {
    // console.log('TwitterStrategy callback', profile)
    return callback(null, {
      oAuthProvider: 'twitter',
      oAuthID: profile.id,
      oAuthName: profile.displayName
    });
  }));

  _passport2.default.use(new _passportFacebook2.default({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.ROOT_URL + '/auth/facebook/cb'
  }, function (accessToken, refreshToken, profile, callback) {
    // console.log('FaceBookStrategy callback', profile)
    return callback(null, {
      oAuthProvider: 'facebook',
      oAuthID: profile.id,
      oAuthName: profile.displayName
    });
  }));

  _passport2.default.use(new _passportLinkedin2.default({
    consumerKey: process.env.LINKEDIN_API_KEY,
    consumerSecret: process.env.LINKEDIN_SECRET_KEY,
    callbackURL: process.env.ROOT_URL + '/auth/linkedin/cb'
  }, function (token, tokenSecret, profile, callback) {
    // console.log('LinkedInStrategy callback', profile)
    return callback(null, {
      oAuthProvider: 'linkedin',
      oAuthID: profile.id,
      oAuthName: profile.displayName
    });
  }));

  _passport2.default.serializeUser(function (oAuthUser, callback) {
    // console.log('serializeUser', oAuthUser)
    model.users.getOrCreate(oAuthUser.oAuthProvider, oAuthUser.oAuthID, oAuthUser.oAuthName).then(function (user) {
      callback(null, user);
    });
  });

  _passport2.default.deserializeUser(function (obj, callback) {
    // console.log('deserializeUser', obj)
    callback(null, obj);
  });

  app.use(_passport2.default.initialize());
  app.use(_passport2.default.session());['twitter', 'facebook', 'linkedin'].forEach(function (strategy) {

    app.get('/auth/' + strategy, _passport2.default.authenticate(strategy));

    app.get('/auth/' + strategy + '/cb', _passport2.default.authenticate(strategy, { failureRedirect: '/auth/' + strategy }), function (req, res) {
      res.redirect('/');
    });
  });

  app.get('/auth/logout', function (req, res, next) {
    req.session.destroy(function (err) {
      if (err) {
        console.log('Server error:', err);
      }
    });
    res.redirect('/');
  });
}