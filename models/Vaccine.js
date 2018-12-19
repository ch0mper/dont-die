const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// age.length is number of doses needed, and is in months

const vaccineSchema = new Schema({
  name: {type: String, unique: true, lowercase: true, required: true},
  age: [{type: Number}],
  disease_description: {type: String},
  isRequired: {type: Boolean}
})

const Vaccine = mongoose.model('Vaccine', vaccineSchema)

Vaccine.find({}, (err, vaccines) => {
  if (err) {
    console.log(err);
  } else if (vaccines.length === 0) {
    vaccineSeeds.forEach(vacc => {
      let vaccine = new Vaccine(vacc)
      vaccine.save()
    })
    console.log(`Seeded DB with 5 new vaccines.`);
  }
})

const vaccineSeeds = [{
    name: 'Hepatisis (HepB)',
    age: [2, 4, 6],
    disease_description: 'chronic liver disease',
    isRequired: true
  },
  {
    name: 'Rotavirus (RV)',
    age: [3, 5, 7, 24],
    disease_description: 'severe poop',
    isRequired: false
  },
  {
    name: 'Diphtheria, Tetanus, Pertussis (DTaP)',
    age: [0, 2],
    disease_description: 'throat inflammation',
    isRequired: true
  },
  {
    name: 'Measles, Mumps, Rubella (MMR)',
    age: [0, 12, 24, 48],
    disease_description: 'ear infections',
    isRequired: true
  },
  {
    name: 'Pneumococcal (PCV)',
    age: [1],
    disease_description: 'prevents death',
    isRequired: false
}]

module.exports = Vaccine;
