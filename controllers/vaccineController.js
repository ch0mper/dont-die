const Vaccine = require('../models/Vaccine.js')

exports.readAll = (req, res, next) => {
  Vaccine.find((err, vaccines) => {
    if (err) {
      res.status(500).json({
        success: false,
        error: err
      })
    } else {
      res.status(200).json(vaccines)
    }
  })
}
