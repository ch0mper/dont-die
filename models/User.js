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

module.exports = User;
