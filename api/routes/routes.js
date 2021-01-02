db  = require('../models/index')
Clothes = require("../models/clothes")
sequelize = db.sequelize
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

    // Filter
    router.get("/filter", function(req,res){
        let gender = req.query.gender;
        let sort = req.query.sort;
        let size = req.query.size;
        let condition = gender ? {gender: gender}: null        
        db.clothes.findAll({where:condition,order:filterOrder(sort)}).then (clothes =>{
            console.log(clothes)
            res.send(clothes)
            }).catch(err =>{
                console.log(err)
                res.status(500).json({msg: "error", details: err})
            });
    });


    // Single item
    router.get("/:id", function(req,res){
        let clothid = req.params.id;
        db.clothes.findAll({where: {id:clothid}}).then(single =>{
            res.send(single)
            console.log(single)
        }).catch(err =>{
            console.log(err)
            res.status(500).json({msg: "error", details: err})
        });
    });

            
        
    app.use('/api', router);
    
    };

function filterOrder(sort){

        if (sort == 1) {
            return sequelize.literal('price')
        } else{
            return sequelize.literal('price DESC')
        }
}