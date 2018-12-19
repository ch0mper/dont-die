const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User has many Members
// all the profiles and records

const memberprofileSchema = new Schema({
  email: {type: String, unique: true, lowercase: true, required: true},
  password: {type: String, required: true},
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MemberProfile'
    }
  ]
})

const MemberProfile = mongoose.model('MemberProfile', memberprofileSchema)

module.exports = MemberProfile;
