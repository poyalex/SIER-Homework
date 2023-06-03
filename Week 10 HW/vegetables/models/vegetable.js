const mongoose = require('mongoose')

//Schema
const vegetableSchema = new mongoose.Schema({
    name: {type: String, require: true},
    color: {type: String, require: true},
    readyToEat: Boolean
})

const Vegetable = mongoose.model('Vegetable', vegetableSchema)

module.exports = Vegetable