const Vaccine = require('../models/Vaccine.js')

let catchAsync = promise => {
  return new Promise( (resolve) => {
    promise.then( result => resolve([ null, result]))
    promise.catch( error => resolve([ error, null ]))
  })
}


exports.index = async (req, res, next) => {
  let [ err, vaccines ]  = await catchAsync(Vaccine.find())
  if (err) {
    res.status(500).json({
      success: false,
      error: err
    })
  } else {
    res.status(200).json(vaccines)
  }
}

exports.show = async (req, res, next) => {
  let vaccine = await Vaccine.findById(req.params.id)
  res.json(vaccine)
}

exports.update = async (req, res, next) => {
  let [err, vaccine] = await catchAsync(Vaccine.findByIdAndUpdate(req.params.id, req.body, { new: true}))
  if (err) {
    res.status(500).json({
      success: false,
      error: err
    })
  } else {
    res.json(vaccine)
  }
}

exports.delete = async (req, res, next) => {
  let [err, vaccine] = await catchAsync(Vaccine.findByIdAndDelete(req.params.id))
  if (err) {
    res.status(500).json({
      success: false,
      error: err
    })
  } else {
    res.json(vaccine)
  }
}

exports.create = async (req, res, next) => {

  let vaccine = new Vaccine({
    email: req.body.email,
    password: req.body.password
  })
  await vaccine.save()
  res.json(vaccine)

}

exports.filteredVaccines = async (req, res, next) => {
  //use decoded token for userId to pass into find
  let vaccines = await Vaccine.find({profileId: req.params.id})
  res.json(vaccines)
}
