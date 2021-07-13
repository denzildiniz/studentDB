const mongoose = require('mongoose');

const connDB = (url) =>{
    return mongoose.connect(url,{
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    })
}

module.exports = connDB