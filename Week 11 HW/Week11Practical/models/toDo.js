const mongoose = require('mongoose')


const toDoSchema = new mongoose.Schema({
  title: {type: String, require: true},
  description: {type: String},
  completed:{type: Boolean, default: false},
  created_at:{type: Date, default: Date.now()}
})

const ToDo = mongoose.model('Todo', toDoSchema)

module.exports = ToDo