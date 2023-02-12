const task = require("../models/task").model;

exports.getTasks = async (req, res) => {
  const tasks = await task.findAll();
  res.send(tasks);
};

exports.insertTask = async (req, res) => {
  const insertedTask = {
    program: req.body.degree,
    institution: req.body.school,
    years: req.body.time,
    location: req.body.place,
  };
  const result = await task.create(insertedTask);
  res.send(result);
};

exports.updateTask = async (req, res) => {
  const updatedTask = {
    program: req.body.updatedDegree,
    institution: req.body.updatedSchool,
    years: req.body.updatedTime,
    location: req.body.updatedPlace,
  };
  const result = await task.update(updatedTask, {
    where: {
      id: req.params.id,
    },
  });
};

exports.deleteTask = async (req, res) => {
  const deletedTask = {
    where: {
      id: req.params.id,
    },
  };
  const result = await task.destroy(deletedTask);
  res.send({ message: "Deleted" });
};
