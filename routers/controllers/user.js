const users = require("./../../db/models/user");
const passwordHash = require("password-hash");

const signup = (req, res) => {
  const { email, pass } = req.body;

  if (email === undefined || pass === undefined || email === "" || pass == "") {
    return res.status(400).send("Some data are missing");
  }

  /* check from email format */
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase()))
    res.status(400).json("invalid email address");
  else
    users
      .find({})
      .then((result) => {
        const found = result.find((item) => {
          return item.email == email;
        });

        if (found) res.status(400).json(-1);
        else {
          const hashedPassword = passwordHash.generate(pass);

          console.log(hashedPassword);
          const newUser = new users({
            email,
            hashedPassword,
          });

          newUser
            .save()
            .then((result) => {
              res.status(200).json(result);
            })
            .catch((err) => {
              console.log(err);
              res.status(400).send(err);
            });
          //   res.status(200).json(1);
        }
      })
      .catch((err) => {
        res.send(err);
      });
};

const login = (req, res) => {
  const { email, pass } = req.body;

  //const hashedPassword = passwordHash.generate(pass);

  users
    .find({})
    .then((result) => {
      const found = result.find((item) => {
        return (
          item.email == email && passwordHash.verify(pass, item.hashedPassword)
        );
      });

      if (found) res.status(200).json(found);
      else {
        res.status(400).json(-1);
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { signup, login };
