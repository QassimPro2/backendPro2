const users = require("./../../db/models/user");
const passwordHash = require("password-hash");

const signup = (req, res) => {
  const { username, email, pass } = req.body;
  console.log(username);
  console.log(email);
  console.log(pass);

  if (
    username === undefined ||
    email === undefined ||
    pass === undefined ||
    email === "" ||
    pass == "" ||
    username === ""
  ) {
    return res.status(200).send("بعض البيانات مفقودة");
  }

  /* check from email format */
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase().trim()))
    res.status(200).send("عنوان إيميل غير صحيح");
  else
    users
      .find({})
      .then((result) => {
        const found = result.find((item) => {
          return item.email.trim() == email || item.username == username.trim();
        });

        if (found) res.status(200).send("الإيميل أو اسم المستخدم موجود مسبقًا");
        else {
          const hashedPassword = passwordHash.generate(pass);

          // console.log(hashedPassword);
          const newUser = new users({
            username,
            email,
            hashedPassword,
          });

          newUser
            .save()
            .then((result) => {
              res.status(200).send("تم التسجيل بنجاح");
            })
            .catch((err) => {
              console.log(err);
              res.status(400).send(err);
            });
        }
      })
      .catch((err) => {
        res.send(err);
      });
};

const login = (req, res) => {
  const { usernameOrEmail, pass } = req.body;
  users
    .find({})
    .then((result) => {
      const found = result.find((item) => {
        console.log(item.username);
        return (
          (item.email == usernameOrEmail || item.username == usernameOrEmail) &&
          passwordHash.verify(pass, item.hashedPassword)
        );
      });

      if (found) res.status(200).json(found.username);
      else {
        res.status(200).send("خطأ بمعلومات الدخول");
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { signup, login };
