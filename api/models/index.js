
const Sequelize = require('sequelize');

const sequelize = new Sequelize('products', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  define: {
    freezeTableName: true
  }
})



let db = {};


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

