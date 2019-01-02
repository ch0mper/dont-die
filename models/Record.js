// this is a join collection for profiles/vaccines

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  profileId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Profile'
    },
  vaccineId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vaccine'
    }
})

const Record = mongoose.model('Record', recordSchema)

module.exports = Record;
