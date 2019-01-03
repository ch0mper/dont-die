const controllers = {
  users: require('../controllers/userController'),
  vaccines: require('../controllers/vaccineController'),
  profiles: require('../controllers/profileController'),
  records: require('../controllers/recordController')

}

const Authentication = require('../controllers/authentication')

const passport = require('../services/passport')

const requireAuth = passport.authenticate('jwt', {session: false})
const requireSignin = passport.authenticate('local', {session: false})

module.exports = (app) => {

  const resources = (name) => {

    //INDEX
    if(typeof controllers[name].index == 'function') app.get(`/api/${name}`, controllers[name].index)

    // SHOW
    if(typeof controllers[name].show == 'function') app.get(`/api/${name}/:id`, controllers[name].show)

    // UPDATE
    if(typeof controllers[name].update == 'function') app.patch(`/api/${name}/:id`, controllers[name].update)

    // CREATE
    if(typeof controllers[name].create == 'function') app.post(`/api/${name}`, controllers[name].create)

    // DESTROY
    if(typeof controllers[name].delete == 'function') app.delete(`/api/${name}/:id`, controllers[name].delete)

  }


  app.post('/api/users/signup', Authentication.signup)
  app.post('/api/users/signin', requireSignin, Authentication.signin)

  app.get('/api/test-noauth', (req, res) => {
    res.send({msg: '축하해~~ 똥똥'})
  })

  app.get('/api/test', requireAuth, (req, res) => {
    res.send({msg: 'shiz be awtenticated. (인증 된)'})
  })

  app.get('/api/users/:id/profiles', controllers["profiles"].filteredProfiles)

  app.get('/api/profiles/:id/records', controllers["records"].filteredRecords)

  resources('users')
  resources('profiles')
  resources('vaccines')
  resources('records')
}
