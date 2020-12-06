
const Sequelize = require('sequelize');

const sequelize = new Sequelize('products', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  define: {
    freezeTableName: true
  }
})

var Clothes = sequelize.define('Clothes', {
    id: { 
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    title: Sequelize.STRING,
    price: Sequelize.INTEGER,
    img: Sequelize.STRING
},{
  freezeTableName: true,
  timestamps: false
}
);


let db = {};


db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;

