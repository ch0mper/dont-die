const Record = require('../models/Record.js')

let catchAsync = promise => {
  return new Promise( (resolve) => {
    promise.then( result => resolve([ null, result]))
    promise.catch( error => resolve([ error, null ]))
  })
}

exports.index = async (req, res, next) => {
  let [ err, records ]  = await catchAsync(Record.find())
  if (err) {
    res.status(500).json({
      success: false,
      error: err
    })
  } else {
    res.status(200).json(records)
  }
}

exports.show = async (req, res, next) => {
  let record = await Record.findById(req.params.id)
  res.json(record)
}

exports.update = async (req, res, next) => {
  let [err, record] = await catchAsync(Record.findByIdAndUpdate(req.params.id, req.body, { new: true}))
  if (err) {
    res.status(500).json({
      success: false,
      error: err
    })
  } else {
    res.json(record)
  }
}

exports.delete = async (req, res, next) => {
  let [err, record] = await catchAsync(Record.findByIdAndDelete(req.params.id))
  if (err) {
    res.status(500).json({
      success: false,
      error: err
    })
  } else {
    res.json(record)
  }
}

exports.create = async (req, res, next) => {
  let record = new Record({
    email: req.body.email,
    password: req.body.password
  })
  await record.save()
  res.json(record)

}

exports.filteredVaccines = async (req, res, next) => {
  let vaccines = await Vaccine.find({profileId: req.params.id})
  res.json(vaccines)
}
