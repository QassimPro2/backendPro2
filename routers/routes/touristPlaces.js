const express = require("express");
const { addTouristPlaces } = require("./../controllers/touristPlaces.js");
const touristPlaces = express.Router();

touristPlaces.post("/add", addTouristPlaces);

module.exports = touristPlaces;
