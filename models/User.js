const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true, required: true},
  password: {type: String, required: true},
  profiles: [ //is this pointless?
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile'
    }
  ]
})

// leave as non fat arrow, we need 'this'
userSchema.pre('save', function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err)
    }
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err)
      }
      user.password = hash
      next()
    })
  })
})

// leave as non fat arrow, we need 'this'
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err)
    }
    callback(null, isMatch)
  })
}

const User = mongoose.model('User', userSchema)

module.exports = User;
