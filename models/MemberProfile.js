const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User has many Members
// all the profiles and records
// should be dependent on user so when user is deleted, member profiles are deleted

const memberProfileSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  birthday: {type: Date},
  gender: {type: String},
  location: {type: String},
  vaccinesId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vaccine'
    }
  ],
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
})

const MemberProfile = mongoose.model('MemberProfile', memberProfileSchema)

module.exports = MemberProfile;
