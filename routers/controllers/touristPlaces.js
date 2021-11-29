const touristPlaces = require("./../../db/models/touristPlaces");

const addTouristPlaces = (req, res) => {
  const { name, city, desc, imges, cost } = req.body;

  const newTouristPlaces = new touristPlaces({
    name,
    city,
    desc,
    imges,
    cost,
  });

  console.log(newTouristPlaces);

  newTouristPlaces
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

module.exports = { addTouristPlaces };
