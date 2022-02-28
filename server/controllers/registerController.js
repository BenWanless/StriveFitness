const knex = require("knex")(require("../knexfile").development);
const bcrypt = require("bcrypt");

exports.register = (req, res) => {
  const { firstName, lastName, userName, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);
  knex
    .select("username")
    .from("users")
    .where("username", userName)
    .then((result) => {
      if (!result.length) {
        return knex("users")
          .insert({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            password: hashedPassword,
          })
          .then((data) => {
            res.status(201).json({
              message: "User successfully signed up",
              data,
            });
          })
          .catch((err) => {
            res
              .status(400)
              .send(`Ran into an error signing up new user: ${err}`);
          });
      } else {
        res.status(400).send(`Username already exists`);
      }
    })
    .catch((err) => {
      res
        .status(400)
        .send(`Ran into an error retrieving selected user info: ${err}`);
    });
};
