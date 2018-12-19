const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// the log in portion

const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true, required: true},
  password: {type: String, required: true},
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MemberProfile'
    }
  ]
})

const User = mongoose.model('User', userSchema)

User.find({}, (err, users) => {
  if (err) {
    console.log(err);
  } else if (users.length === 0) {
    const user1 = new User({
      email: 'megan@example.com',
      password: '1234'
    })
    const user2 = new User({
      email: 'barbara@example.com',
      password: '1234'
    })
    user1.save()
    user2.save()
    console.log('Seeded DB with 2 new users.');
  }
})

module.exports = User;
