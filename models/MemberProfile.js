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
  vaccines: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vaccine'
    }
  ],
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
})

const MemberProfile = mongoose.model('MemberProfile', memberProfileSchema)

MemberProfile.find({}, (err, members) => {
  if (err) {
    console.log(err);
  } else if (members.length === 0) {
    const member1 = new MemberProfile({
      firstName: 'megan',
      lastName: '1234'
    })
    const member2 = new MemberProfile({
      firstName: 'barbara',
      lastName: '1234'
    })
    member1.save()
    member2.save()
    console.log('Seeded DB with 2 new members.');
  }
})

module.exports = MemberProfile;
