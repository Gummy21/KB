db = require('../models/index')
seedClothes = require('./products')

                    

function seedDb(){
    seedClothes.forEach(clothes => {
        db.clothes.create(clothes).then().catch(err =>{
            console.log(err)
        })
    });
}

module.exports = seedDb