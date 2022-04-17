const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect(
        //"mongodb://127.0.0.1:27017/psc"
        "mongodb+srv://deepak:deep_123@cluster0.fyotr.mongodb.net/finalCountDown?retryWrites=true&w=majority"
    )
}

module.exports=connect 