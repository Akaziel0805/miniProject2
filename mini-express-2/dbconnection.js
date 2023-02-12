const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("course", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 10,
    acquire: 3000,
    min: 0,
    idle: 10000,
  },
});

try {
  sequelize.authenticate();
} catch (e) {
  console.log("Unable to Connect");
  console.log(e);
}
exports.sequelize = sequelize;
