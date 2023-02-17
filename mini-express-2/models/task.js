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
      allowNull: false,
    },
    institution: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    years: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    college: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    career: {
      type: DataTypes.TEXT,
      allowNull: false,
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
