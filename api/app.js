const express = require("express"),
      cors    = require("cors"),
      app     = express()

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

db  = require('./models/index')
Clothes = require("./models/clothes")
Op = db.sequelize
db.clothes = Clothes
db.sequelize.sync({logging:console.log})

// seedDb = require('./seed')
// seedDb()

app.use(cors(corsOptions))

// Gendered Clothes

app.get("/", function (req,res){
    const gender = req.query.gender

    console.log(gender)
    const condition = gender ? {gender: gender}: null
    db.clothes.findAll({where: condition}).then (clothes =>{
        console.log(clothes)
        res.send(clothes)
    }).catch(err =>{
        console.log(err)
        res.status(500).json({msg: "error", details: err})
    });
});
// Single item
app.get("/products/:id", function(req,res){
    const id = req.params.id;
    db.clothes.findAll({where: [id]}).then(single =>{
        res.send(single)
    }).catch(err =>{
        console.log(err)
        res.status(500).json({msg: "error", details: err})
    });
});


app.listen(8887, function () {
    console.log('Server has started on port 8887')
})