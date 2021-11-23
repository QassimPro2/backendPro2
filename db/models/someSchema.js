const mongoose = require("mongoose");

const someSchema = new mongoose.Schema({
  someKey: { type: String, required: true },
  date: { type: Date, default: new Date() },
  isDeleted: { type: String, default: false },
  someNumber: { type: Number, required: true, unique: true },
});

module.exports = mongoose.model("Some", someSchema);
