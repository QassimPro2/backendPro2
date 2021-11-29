const journey = require("./../../db/models/journey");
const hotels = require("./../../db/models/hotels");
const touristPlaces = require("./../../db/models/touristPlaces");

const addJourney = (req, res) => {
  const { name, hotelId, touristPlacesId, city, days, cost, category } =
    req.body;

  const newJourney = new journey({
    name,
    hotelId,
    touristPlacesId,
    city,
    days,
    cost,
    category,
  });

  console.log(newJourney);

  newJourney
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

const getJourney = (req, res) => {
  journey
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getJourneyInfo = (req, res) => {
  const { id } = req.params;
  journey
    .find({ _id: id })
    .then((result) => {
      let info = result;
      //

      hotels
        .find({ _id: result[0].hotelId })
        .then((result2) => {
          console.log(result2);
          info.push(result2[0]);

          touristPlaces
            .find({ _id: { $in: result[0].touristPlacesId } })
            .then((result3) => {
              info.push(result3);
              res.send(info);
            })
            .catch((err) => {
              res.send(err);
            });
        })
        .catch((err) => {
          res.send(err);
        });
    })
    .catch((err) => {
      res.send(err);
    });
};

const getJourneyByCity = (req, res) => {
  const { city1 } = req.params;
  journey
    .find({ city: city1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getJourneyByCatg = (req, res) => {
  const { catg1 } = req.params;
  journey
    .find({ category: catg1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getJourneyByDays = (req, res) => {
  const { days1 } = req.params;
  journey
    .find({ days: days1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  addJourney,
  getJourney,
  getJourneyInfo,
  getJourneyByCity,
  getJourneyByCatg,
  getJourneyByDays,
};
