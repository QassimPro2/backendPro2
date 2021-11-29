const mongoose = require("mongoose");

const journey = new mongoose.Schema({
  name: { type: String, required: true },
  hotelId: { type: String, required: true },
  touristPlacesId: { type: Array, required: true },
  city: { type: String, required: true, trim: true },
  days: { type: Number, required: true },
  cost: { type: Number, required: true },
  category: { type: String, required: true, trim: true },
});

module.exports = mongoose.model("journey", journey);
