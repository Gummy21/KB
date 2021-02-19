
const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize("products", "root", "", {
  host: 'localhost',
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

