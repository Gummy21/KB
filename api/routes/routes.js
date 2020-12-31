db  = require('../models/index')
Clothes = require("../models/clothes")
Op = db.sequelize
db.clothes = Clothes

module.exports = app => {
    let router = require("express").Router();
    
    // Gendered Clothes

    router.get("/", function (req,res){
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
    router.get("/products/:id", function(req,res){
        const clothid = req.query.clothid;
        db.clothes.findAll({where: {id:clothid}}).then(single =>{
            res.send(single)
        }).catch(err =>{
            console.log(err)
            res.status(500).json({msg: "error", details: err})
        });
    });

            
        
    app.use('/api', router);
    
    };