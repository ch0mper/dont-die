const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User has many profiles
// all the profiles and records
// should be dependent on user so when user is deleted, member profiles are deleted

const profileSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  birthdate: {type: Date},
  gender: {type: String},
  location: {type: String},
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile;
