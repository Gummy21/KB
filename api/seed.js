db = require('./models/index')

const seedClothes =  {title:"Blue Jeans", price: 29.99, img:"https://cdn.shopify.com/s/files/1/1735/5687/products/levis-blue-baggy-3.png?v=1490911974" }

function seedDb(){
    db.clothes.create(seedClothes).then().catch(err =>{
        console.log(err)
    })
}

module.exports = seedDb