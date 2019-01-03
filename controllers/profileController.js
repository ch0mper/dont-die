const Profile = require('../models/Profile.js')

let catchAsync = promise => {
  return new Promise( (resolve) => {
    promise.then( result => resolve([ null, result]))
    promise.catch( error => resolve([ error, null ]))
  })
}

exports.index = async (req, res, next) => {
  let [ err, profiles ]  = await catchAsync(Profile.find())
  if (err) {
    res.status(500).json({
      success: false,
      error: err
    })
  } else {
    res.status(200).json(profiles)
  }
}

exports.show = async (req, res, next) => {
  let profile = await Profile.findById(req.params.id)
  res.json(profile)
}

exports.update = async (req, res, next) => {
  let [err, profile] = await catchAsync(Profile.findByIdAndUpdate(req.params.id, req.body, { new: true}))
  if (err) {
    res.status(500).json({
      success: false,
      error: err
    })
  } else {
    res.json(profile)
  }
}

exports.delete = async (req, res, next) => {
  let [err, profile] = await catchAsync(Profile.findByIdAndDelete(req.params.id))
  if (err) {
    res.status(500).json({
      success: false,
      error: err
    })
  } else {
    res.json(profile)
  }
}

exports.create = async (req, res, next) => {

  let profile = new Profile({
    email: req.body.email,
    password: req.body.password
  })
  await profile.save()
  res.json(profile)

}

exports.filteredProfiles = async (req, res, next) => {
  let profiles = await Profile.find({userId: req.params.id})
  res.json(profiles)
}
