const Profile = require('../models/Profile.js')

exports.index = (req, res, next) => {
  Profile.find((err, profiles) => {
    if (err) {
      res.status(500).json({
        success: false,
        error: err
      })
    } else {
      res.status(200).json(profiles)
    }
  })
}
