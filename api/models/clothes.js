var db = require('./index')

var Clothes = db.sequelize.define('clothes', {
    id: { 
      primaryKey: true,
      autoIncrement: true,
      type: db.Sequelize.INTEGER
    },
    title: db.Sequelize.TEXT,
    price: db.Sequelize.INTEGER,
    img: db.Sequelize.TEXT,
    gender: db.Sequelize.INTEGER
},{
  freezeTableName: true,
  timestamps: false
}
);
module.exports = Clothes
