const MemberProfile = require('../models/MemberProfile.js')

exports.readAll = (req, res, next) => {
  MemberProfile.find((err, members) => {
    if (err) {
      res.status(500).json({
        success: false,
        error: err
      })
    } else {
      res.status(200).json(members)
    }
  })
}
