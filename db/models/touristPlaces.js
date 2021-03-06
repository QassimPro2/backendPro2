const mongoose = require("mongoose");

const touristPlaces = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  desc: { type: String, required: true },
  imges: { type: Array, required: true },
  cost: { type: Number, required: true },
});

module.exports = mongoose.model("touristPlaces", touristPlaces);
