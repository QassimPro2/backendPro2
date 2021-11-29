const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const db = require("./db/db.js");

dotenv.config();

// router

const app = express();

//app level middleware
app.use(express.json());
const appMiddleware = (req, res, next) => {
  console.log("appMiddleware");
  next();
};
app.use(appMiddleware);
app.use(cors());
app.use(morgan("dev"));

// router level middleware
const someRouter = require("./routers/routes/someFile");
app.use("/somePath", someRouter);

const user = require("./routers/routes/user");
app.use("/user", user);

const hotels = require("./routers/routes/hotels");
app.use("/hotels", hotels);

const touristPlaces = require("./routers/routes/touristPlaces");
app.use("/touristPlaces", touristPlaces);

const journey = require("./routers/routes/journey");
app.use("/journey", journey);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
