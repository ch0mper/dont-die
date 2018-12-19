const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true })

let Vaccine = require('./models/Vaccine.js')
let MemberProfile = require('./models/MemberProfile.js')
let User = require('./models/User.js')

pry = require('pryjs')
eval(pry.it)
