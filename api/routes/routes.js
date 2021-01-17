db  = require('../models/index')
Clothes = require("../models/clothes")
sequelize = db.sequelize
Op = db.Sequelize.Op
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
        const gender = Number(req.query.gender),
              sort = req.query.sort,
              size = req.query.size,
              sizer  = sizeCheck(size);      
        db.clothes.findAll({where: {size:sizer,gender:gender},order:filterOrder(sort)}).then (clothes =>{
            console.log(clothes)
            res.send(clothes)
            }).catch(err =>{
                console.log(err)
                res.status(500).json({msg: "error", details: err})
            });
    });
    
    //Send Cart
    router.get("/cart/:cart", function (req, res) {
      let cartid = req.params.cart;
      var cartItems = [];
      let arr = cartid.split(",");
      let itemsProcessed = 0;
      let num = 0
      function callBack(items){
        res.json(items)
      };
      
      arr.forEach((id) => {
        db.clothes
          .findAll({ where: { id: id } })
          .then(cartitem => {
           
            let items = cartitem[0]
            cartItems.push(items)
            num++
            itemsProcessed++
            if(itemsProcessed === arr.length) {
                callBack(cartItems);
            }
          })
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

function sizeCheck(size){
    console.log(size)
    if (size != "S" & size != "M" & size != "L"){
        
        return {[Op.like]:'%'} 
    } else{
        
        return (size)
    }
}