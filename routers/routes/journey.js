const express = require("express");
const {
  addJourney,
  getJourney,
  getJourneyInfo,
  getJourneyByCity,
  getJourneyByCatg,
  getJourneyByDays,
} = require("./../controllers/journey.js");
const journey = express.Router();

journey.post("/add", addJourney);
journey.get("/get", getJourney);
journey.get("/getInfo/:id", getJourneyInfo);
journey.get("/getJourneyByCity/:city1", getJourneyByCity);
journey.get("/getJourneyByCatg/:catg1", getJourneyByCatg);
journey.get("/getJourneyByDays/:days1", getJourneyByDays);

module.exports = journey;
