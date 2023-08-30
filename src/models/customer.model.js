// auth NOT UPLOADED TO GITHUB
let URI = require('../auth/auth');

let mongoose = require('mongoose');

mongoose.connect(URI)

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)