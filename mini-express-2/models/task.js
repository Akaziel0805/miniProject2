"use strict";
const { DataTypes, Sequelize } = require("sequelize");
const instance = require("../dbconnection");
const task = instance.sequelize.define(
  "tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    program: {
      type: DataTypes.STRING,
    },
    institution: {
      type: DataTypes.STRING,
    },
    years: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "tasks",
  }
);

exports.model = task;
