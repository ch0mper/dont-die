const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/dont-die-db",
  { useNewUrlParser: true }
);

let Vaccine = require("./models/Vaccine.js");
let Profile = require("./models/Profile.js");
let User = require("./models/User.js");
let Record = require("./models/Record.js");

pry = require("pryjs");

//const
(async function() {
  await User.deleteMany();
  const user1 = new User({
    email: "megan@example.com",
    password: "1234"
  });
  const user2 = new User({
    email: "barbara@example.com",
    password: "1234"
  });
  await user1.save();
  await user2.save();
  console.log("Seeded DB with 2 new users.");
  users = await User.find({});

  await Vaccine.deleteMany();
  // Promise.all accepts array of promises
  let vaccines = await Promise.all(
    vaccineSeeds.map(vacc => {
      let vaccine = new Vaccine(vacc);
      return vaccine.save(); // returns promise-like object
    })
  );
  console.log(`Seeded DB with 5 new vaccines.`);

  await Profile.deleteMany();
  const profile1 = new Profile({
    firstName: "william",
    lastName: "farley",
    userId: user1._id
    // vaccinesId: [vaccines[0]._id, vaccines[1]._id]
  });
  const profile2 = new Profile({
    firstName: "hannah",
    lastName: "farley",
    userId: user1._id
    // vaccinesId: [vaccines[0]._id, vaccines[1]._id, vaccines[2]._id]
  });
  await profile1.save();
  await profile2.save();
  console.log("Seeded DB with 2 new profiles.");
  profiles = await Profile.find({});

  await Record.deleteMany();
  const record1 = new Record({
    profileId: profile1._id,
    vaccineId: vaccines[0]._id
  });
  const record2 = new Record({
    profileId: profile1._id,
    vaccineId: vaccines[1]._id
  });
  const record3 = new Record({
    profileId: profile2._id,
    vaccineId: vaccines[1]._id
  });
  await record1.save();
  await record2.save();
  await record3.save();
  console.log("Seeded DB with 3 new records.");
  records = await Record.find({});

  eval(pry.it);
})();

const vaccineSeeds = [
  {
    name: "Hepatisis (HepB) (1/4)",
    age: 0,
    disease_description: `A serious liver infection caused by the hepatitis B virus that's easily preventable by a vaccine.`
  },

  {
    name: "Hepatisis (HepB) (2/4)",
    age: 1,
    disease_description: `A serious liver infection caused by the hepatitis B virus that's easily preventable by a vaccine.`
  },
  {
    name: "Hepatisis (HepB) (3/4)",
    age: 6,
    disease_description: `A serious liver infection caused by the hepatitis B virus that's easily preventable by a vaccine.`
  },
  {
    name: "Hepatisis (HepB) (4/4)",
    age: 18,
    disease_description: `A serious liver infection caused by the hepatitis B virus that's easily preventable by a vaccine.`
  },
  {
    name: "Rotavirus (RV) (1/2)",
    age: 2,
    disease_description:
      "Viral infection that causes severe diarrhea in children."
  },
  {
    name: "Rotavirus (RV) (2/2)",
    age: 4,
    disease_description:
      "Viral infection that causes severe diarrhea in children."
  },
  {
    name: "Diphtheria, Tetanus, Pertussis (DTaP) (1/5)",
    age: 2,
    disease_description: `Diphtheria: a serious infection of the nose and throat that's easily preventable by a vaccine.
    Tetanus: A serious bacterial infection that causes painful muscle spasms and can lead to death.
    Pertussis or Whooping cough: A highly contagious respiratory tract infection that is easily preventable by vaccine.
    `
  },
  {
    name: "Diphtheria, Tetanus, Pertussis (DTaP) (2/5)",
    age: 4,
    disease_description: `Diphtheria: a serious infection of the nose and throat that's easily preventable by a vaccine.
    Tetanus: A serious bacterial infection that causes painful muscle spasms and can lead to death.
    Pertussis or Whooping cough: A highly contagious respiratory tract infection that is easily preventable by vaccine.
    `
  },
  {
    name: "Diphtheria, Tetanus, Pertussis (DTaP) (3/5)",
    age: 6,
    disease_description: `Diphtheria: a serious infection of the nose and throat that's easily preventable by a vaccine.
    Tetanus: A serious bacterial infection that causes painful muscle spasms and can lead to death.
    Pertussis or Whooping cough: A highly contagious respiratory tract infection that is easily preventable by vaccine.
    `
  },
  {
    name: "Diphtheria, Tetanus, Pertussis (DTaP) (4/5)",
    age: 15,
    disease_description: `Diphtheria: a serious infection of the nose and throat that's easily preventable by a vaccine.
    Tetanus: A serious bacterial infection that causes painful muscle spasms and can lead to death.
    Pertussis or Whooping cough: A highly contagious respiratory tract infection that is easily preventable by vaccine.
    `
  },
  {
    name: "Diphtheria, Tetanus, Pertussis (DTaP) (5/5)",
    age: 48,
    disease_description: `Diphtheria: a serious infection of the nose and throat that's easily preventable by a vaccine.
    Tetanus: A serious bacterial infection that causes painful muscle spasms and can lead to death.
    Pertussis or Whooping cough: A highly contagious respiratory tract infection that is easily preventable by vaccine.
    `
  },
  {
    name: "Haemophilus influenzae type B (Hib) (1/3)",
    age: 2,
    disease_description: `Can cause some serious life-threatening conditions, including meningitis and epiglottitis (inflammation of the epiglottis).`
  },
  {
    name: "Haemophilus influenzae type B (Hib) (2/3)",
    age: 4,
    disease_description: `Can cause some serious life-threatening conditions, including meningitis and epiglottitis (inflammation of the epiglottis).`
  },
  {
    name: "Haemophilus influenzae type B (Hib) (3/3)",
    age: 12,
    disease_description: `Can cause some serious life-threatening conditions, including meningitis and epiglottitis (inflammation of the epiglottis).`
  },

  {
    name: "Pneumococcal conjugate (PCV13) (1/4)",
    age: 2,
    disease_description: `Pneumococcal bacterias can cause some serious life-threatening conditions, including meningitis and epiglottitis (inflammation of the epiglottis).`
  },

  {
    name: "Pneumococcal conjugate (PCV13) (2/4)",
    age: 4,
    disease_description: `Pneumococcal bacterias can cause some serious life-threatening conditions, including meningitis and epiglottitis (inflammation of the epiglottis).`
  },

  {
    name: "Pneumococcal conjugate (PCV13) (3/4)",
    age: 6,
    disease_description: `Pneumococcal bacterias can cause some serious life-threatening conditions, including meningitis and epiglottitis (inflammation of the epiglottis).`
  },
  {
    name: "Pneumococcal conjugate (PCV13) (4/4)",
    age: 12,
    disease_description: `Pneumococcal bacterias can cause some serious life-threatening conditions, including meningitis and epiglottitis (inflammation of the epiglottis).`
  },
  {
    name: "Inactivated poliovirus (IPV) (1/4)",
    age: 2,
    disease_description: `A virus that may cause paralysis and is easily preventable by the polio vaccine.`
  },
  {
    name: "Inactivated poliovirus (IPV) (2/4)",
    age: 4,
    disease_description: `A virus that may cause paralysis and is easily preventable by the polio vaccine.`
  },
  {
    name: "Inactivated poliovirus (IPV) (3/4)",
    age: 6,
    disease_description: `A virus that may cause paralysis and is easily preventable by the polio vaccine.`
  },
  {
    name: "Inactivated poliovirus (IPV) (4/4)",
    age: 48,
    disease_description: `A virus that may cause paralysis and is easily preventable by the polio vaccine.`
  },
  {
    name: "Influenza (IIV)",
    age: 6,
    disease_description: `A common viral infection that can be deadly, the flu attacks the lungs, nose, and throat.`
  },
  {
    name: "Measles, Mumps, Rubella (MMR)",
    age: 12,
    disease_description: `Measles: Viral infection that spreads through the air by respiratory droplets produced from coughing or sneezing.
    Mumps: A viral infection that affects the salivary glands.
    Rubella: A contagious viral infection best known by its distinctive red rash.
    `
  },

  {
    name: "Varicella (VAR) (1/2)",
    age: 12,
    disease_description: `Varicella or Chicken pox is a highly contagious viral infection causing an itchy, blister-like rash on the skin.`
  },

  {
    name: "Varicella (VAR) (2/2)",
    age: 48,
    disease_description: `Varicella or Chicken pox is a highly contagious viral infection causing an itchy, blister-like rash on the skin.`
  },

  {
    name: "Hepatitis A (HepA) (1/2)",
    age: 12,
    disease_description: `A highly contagious liver infection caused by the hepatitis A virus.`
  },
  {
    name: "Hepatitis A (HepA) (2/2)",
    age: 18,
    disease_description: `A highly contagious liver infection caused by the hepatitis A virus.`
  },
  {
    name: "Meningococcal (MenACWY-D) (1/2)",
    age: 132,
    disease_description: `Meningococcal meningitis is a rare but serious bacterial infection. It causes the membranes that cover the brain and spinal cord to become inflamed.`
  },
  {
    name: "Meningococcal (MenACWY-D) (2/2)",
    age: 192,
    disease_description: `Meningococcal meningitis is a rare but serious bacterial infection. It causes the membranes that cover the brain and spinal cord to become inflamed.`
  },
  {
    name: "Diphtheria, Tetanus, Pertussis (Tdap)",
    age: 132,
    disease_description: `Diphtheria: a serious infection of the nose and throat that's easily preventable by a vaccine.
    Tetanus: A serious bacterial infection that causes painful muscle spasms and can lead to death.
    Pertussis or Whooping cough: A highly contagious respiratory tract infection that is easily preventable by vaccine.
    `
  }
];
