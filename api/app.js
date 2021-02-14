const express = require("express"),
      cors    = require("cors"),
      app     = express()
require('dotenv').config();
const corsOptions = {
    origin: 'http://angular-kb-production.s3-website-ap-southeast-2.amazonaws.com',
    optionsSuccessStatus: 200
}

db  = require('./models/index')
Clothes = require("./models/clothes")
Op = db.sequelize
db.clothes = Clothes
db.sequelize.sync({logging:console.log})

// seedDb = require('./seed/seed')
// seedDb()

app.use(cors(corsOptions))


require("./routes/routes")(app)

app.listen(process.env.PORT, function () {
    console.log('Server has started')
})