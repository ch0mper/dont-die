const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport')
const bodyParser = require('body-parser')

const Vaccine = require('./models/Vaccine.js')
const User = require('./models/User.js')
const Profile = require('./models/Profile.js')

const router = require('./router/routes')

const app = express(); // new instance of express which helps manage app <--> browser

app.use(bodyParser.json())
app.use(cors())
router(app) // runs routers

const server = http.createServer(app)
const port = 5000

console.log('Connecting to Local Database.');
mongoose.connect('mongodb://localhost/dont-die-db', { useNewUrlParser: true })

server.listen(port)
console.log(`NodeJS Server running on port ${port}.`);
