const express = require("express");
const { signup, login } = require("./../controllers/user.js");
const user = express.Router();

user.post("/signup", signup);
user.post("/login", login);

module.exports = user;
