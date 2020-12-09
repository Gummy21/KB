const db = require('./index')
module.exports = Clothes
var Clothes = db.sequelize.define('Clothes', {
    id: { 
      primaryKey: true,
      autoIncrement: true,
      type: db.Sequelize.INTEGER
    },
    title: db.Sequelize.STRING,
    price: db.Sequelize.INTEGER,
    img: db.Sequelize.STRING
},{
  freezeTableName: true,
  timestamps: false
}
);

