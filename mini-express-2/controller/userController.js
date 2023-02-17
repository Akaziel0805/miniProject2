const user = require("../models/user").model;

exports.getUsers = async (req, res) => {
  const users = await user.findAll();
  res.send(users);
};

exports.insertUser = async (req, res) => {
  const insertedUser = {
    username: req.body.usernameReg,
    password: req.body.passwordReg,
  };
  const result = await user.create(insertedUser);
  res.send(result);
};
