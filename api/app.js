const express = require("express"),
      app     = express()
require('dotenv').config();

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