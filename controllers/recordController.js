const Record = require('../models/Record.js')

let catchAsync = promise => {
  return new Promise( (resolve) => {
    promise.then(
      result => resolve([ null, result]),
      error => {
        resolve([ error, null ])
      })
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
    vaccineId: req.body.vaccineId,
    profileId: req.body.profileId
  })
  await record.save()
  res.json(record)

}

exports.filteredRecords = async (req, res, next) => {
  let records = await Record.find({profileId: req.params.id})
  res.json(records)
}
