const userController = require('../controllers/userController');
const memberProfileController = require('../controllers/memberProfileController');
const vaccineController = require('../controllers/vaccineController');

module.exports = (app) => {
  app.get('/api/test', (req, res) => {
    res.send({msg: 'oh hai!'})
  })

  app.get('/api/users', userController.readAll)
  app.get('/api/memberProfiles', memberProfileController.readAll)
  app.get('/api/vaccines', vaccineController.readAll)

}
