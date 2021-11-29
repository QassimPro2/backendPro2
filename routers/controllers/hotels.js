const hotels = require("./../../db/models/hotels");

const addHotels = (req, res) => {
  const { name, city, desc, imges, cost, review } = req.body;

  const newHotel = new hotels({
    name,
    city,
    desc,
    imges,
    cost,
    review,
  });

  console.log(newHotel);

  newHotel
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

module.exports = { addHotels };
