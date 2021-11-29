const express = require("express");
const { addHotels } = require("./../controllers/hotels.js");
const hotels = express.Router();

hotels.post("/add", addHotels);

module.exports = hotels;
