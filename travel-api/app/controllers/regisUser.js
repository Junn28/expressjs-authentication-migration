const User = require('../models').User;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET;

module.exports = {
  verifySignUp(req, res) {
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((email) => {
      if (email) {
        res.status(400).send({
          auth: false,
          email: req.body.email,
          message: 'Error',
          errors: 'email is already taken!',
        });
        return;
      }

      return User.create({
        nama: req.body.nama,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      })
        .then((user) => {
          res.status(200).send({
            auth: true,
            message: 'User successfully registered.',
            data: user,
          });
        })
        .catch((err) => {
          res.status(500).send({
            auth: false,
            message: 'Error',
            errors: err,
          });
        });
    });
  },

  verifySignIn(req, res) {
    return User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        if (!user) {
          return res.status(400).send({
            auth: false,
            email: req.body.email,
            message: 'Error',
            errors: 'invalid email!',
          });
        }

        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
          return res.status(401).send({
            auth: false,
            email: req.body.email,
            accessToken: null,
            message: 'Error',
            errors: 'Invalid Password!',
          });
        }

        let token =
          'Bearer ' +
          jwt.sign(
            {
              email: user.email,
            },
            secret,
            {
              expiresIn: 86400, //24h expired
            }
          );

        return res.status(200).send({
          auth: true,
          email: req.body.email,
          accessToken: token,
          message: 'Error',
          errors: null,
        });
      })
      .catch((err) => {
        res.status(500).send({
          auth: false,
          email: req.body.email,
          accessToken: null,
          message: 'Error',
          errors: err,
        });
      });
  },
};
