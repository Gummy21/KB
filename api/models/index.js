
const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.D_NAME, process.env.D_USER, process.env.D_PASS, {
  host: process.env.AWS_DATABASE,
  dialect: 'mysql',
  port: process.env.AWS_PORT,
  define: {
    freezeTableName: true
  }
})



let db = {};


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

