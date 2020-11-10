const mongoose = require ("mongoose");
const Drone = require("../models/Drone.model.js");

const DB_NAME = 'express-drones-dev';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  Drone.create(drones)
  .then(dronesInDB => {
      console.log(`Created ${dronesInDB.length} drones`)
      mongoose.connection.close();
  })
  .catch(err => console.log(`Error is ${err}`))