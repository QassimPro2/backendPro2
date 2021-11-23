const mongoose = require("mongoose");

const users = new mongoose.Schema({
  email: { type: String, drequired: true },
  hashedPassword: { type: String, required: true },
  fav: { type: Array, required: false },
});

module.exports = mongoose.model("users", users);
