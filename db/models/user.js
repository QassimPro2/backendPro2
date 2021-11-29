const mongoose = require("mongoose");

const users = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  hashedPassword: { type: String, required: true },
  fav: { type: Array, required: false },
});

module.exports = mongoose.model("users", users);
