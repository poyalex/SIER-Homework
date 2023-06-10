const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const toDoSchema = new mongoose.Schema({
  title: String, required,
  description: String,
  completed: Boolean, default:false,
  created_at: Date, default: Date.now
})

const ToDo = mongoose.model('ToDo', toDoSchema)

module.exports = ToDo