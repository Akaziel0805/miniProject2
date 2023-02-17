"use strict";
const { DataTypes, Sequelize } = require("sequelize");
const instance = require("../dbconnection");
const user = instance.sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "users",
  }
);
exports.model = user;
