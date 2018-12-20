const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true })

let Vaccine = require('./models/Vaccine.js')
let MemberProfile = require('./models/MemberProfile.js')
let User = require('./models/User.js')

pry = require('pryjs')

;(async function(){
  await User.deleteMany()
  const user1 = new User({
    email: 'megan@example.com',
    password: '1234'
  })
  const user2 = new User({
    email: 'barbara@example.com',
    password: '1234'
  })
  await user1.save()
  await user2.save()
  console.log('Seeded DB with 2 new users.');
  users = await User.find({})

  await MemberProfile.deleteMany()
  const member1 = new MemberProfile({
    firstName: 'megan',
    lastName: '1234',
    userId: user1._id
    //vaccinesId:
  })
  const member2 = new MemberProfile({
    firstName: 'barbara',
    lastName: '1234',
    userId: user1._id
    //vaccinesId:
  })
  await member1.save()
  await member2.save()
  console.log('Seeded DB with 2 new members.');
  members = await MemberProfile.find({})

  eval(pry.it)
})()
