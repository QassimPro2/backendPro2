const express = require("express");
const { someFunc, anotherFunc } = require("./../controllers/someFile.js");
const someRouter = express.Router();

someRouter.post("/someEndpoint", someFunc);
someRouter.get("/anotherEndpoint", anotherFunc);

module.exports = someRouter;
