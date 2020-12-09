const express = require("express"),
      cors    = require("cors"),
      app     = express()
      


const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

db  = require('./models/index')
clothes = require("./models/clothes")
db.clothes = clothes

db.sequelize.sync({logging:console.log})

app.use(cors(corsOptions))

// All clothes
app.get("/", function (req,res){
    db.clothes.findAll().then (clothes =>{
        res.send(clothes)
    }).catch(err =>{
        console.log(err)
        res.status(500).json({msg: "error", details: err})
    });
});
// Single item
app.get("/:id", function(req,res){
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