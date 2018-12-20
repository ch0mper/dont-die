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

  app.get('/api/test', (req, res) => {
    res.send({msg: 'oh hai!'})
  })

  app.get('/api/users', userController.readAll)
  app.get('/api/profiles', profileController.readAll)
  app.get('/api/vaccines', vaccineController.readAll)
}
