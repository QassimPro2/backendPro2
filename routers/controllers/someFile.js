const someModel = require("./../../db/models/someSchema");

const someFunc = (req, res) => {
  const { someKey, someNumber } = req.body;
  console.log(someKey);

  const newSomeData = new someModel({
    someKey,
    someNumber,
  });

  console.log(newSomeData);

  newSomeData
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

const anotherFunc = (req, res) => {
  someModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
  //res.send("");
};

module.exports = { someFunc, anotherFunc };
