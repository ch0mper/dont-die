const userController = require('../controllers/userController');
const profileController = require('../controllers/profileController');
const vaccineController = require('../controllers/vaccineController');
const Authentication = require('../controllers/authentication')

const passport = require('../services/passport')

const requireAuth = passport.authenticate('jwt', {session: false})
const requireSignin = passport.authenticate('local', {session: false})

module.exports = (app) => {

  app.post('/api/user/signup', Authentication.signup)
  app.post('/api/user/signin', requireSignin, Authentication.signin)

  app.get('/api/test-noauth', (req, res) => {
    res.send({msg: '축하해~~ 똥똥'})
  })

  app.get('/api/test', requireAuth, (req, res) => {
    res.send({msg: 'shiz be awtenticated. (인증 된)'})
  })

  app.get('/api/users', userController.readAll)
  app.get('/api/profiles', profileController.readAll)
  app.get('/api/vaccines', vaccineController.readAll)
}
