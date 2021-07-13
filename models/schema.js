const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:email,
        required:true
    }

})

module.exports = mongoose.model('Student',studentSchema)

