const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect(
        //"mongodb://127.0.0.1:27017/psc"
        "mongodb+srv://Meghna:qazplmvgy1209@geopins.wmz9c.mongodb.net/GeoPins?retryWrites=true&w=majority"
    )
}

module.exports=connect 