const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport')
const bodyParser = require('body-parser')

const Vaccine = require('./models/Vaccine.js')
const User = require('./models/User.js')
const MemberProfile = require('./models/MemberProfile.js')

const router = require('./router/routes')

const app = express();

app.use(bodyParser.json())
app.use(cors())
router(app) // runs router

const server = http.createServer(app)
const port = 5000

console.log('Connecting to Local Database.');
mongoose.connect('mongodb://localhost/dont-die-db', { useNewUrlParser: true })

server.listen(port)
console.log(`NodeJS Server running on port ${port}.`);
