const express = require('express');
const Joi     = require('joi');

const router  = express.Router();

const db      = require('../database')
const userLoc = db.get('location')

const schema = Joi.object({
    name: Joi.string()
        .alphanum().min(3).max(130).required(),

    weight: Joi.number()
        .integer().min(1).max(9999),

    location: Joi.string()
        .min(3).max(130).required(),

    latitude: Joi.number()
        .double().min(-90).max(90),

    longitude: Joi.number()
        .double().min(-180).max(180),
}).with('name', 'weigth', 'location', 'latitude', 'longitude');

router.get('/', (req, res) => {
  location
    .find()
    .then(allLocations => {
      res.json(allLocations);
    });
});

router.post('/', (req, res, res_error) => {
  const result = Joi.validate(req.body, schema);

  if (result.error === null ) {
    const { name, weight, location, latitude, longitude } = req.body;
    const userLocation = {
      name,
      weight,
      location,
      latitude,
      longitude
    }
    location
      .inset(userLocation)
      .then(locationInsert => {
        res.json(locationInsert);
      })
  } else {
    res_error(result.error);
  }
})

module.exports = router;
