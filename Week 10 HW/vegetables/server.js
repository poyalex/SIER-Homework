require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const Vegetable = require('./models/vegetable')
const PORT = process.env.PORT || 3000

const app = express()

//urlencoded is used for ssr websites to send html data
//router.express.json is used when building an api
app.use(express.urlencoded({extended: true}))

//inject data from Mongoose via MONGO_URI
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () =>{
    console.log('connected to mongodb')
})

app.listen (PORT, () => {
    console.log(`Port ${PORT} is open`)
})

//INDUCES
//INDEX - table of contents. List all of the fruits

//NEW - show user form to fill out to create a fruit

//DELETE - backend only functionality that is used to delete a fruit

//UPDATE - backend only functionality that is used to update a fruit

//CREATE - backend only functionality that is used to create a fruit
app.post('/vegetables', async (req, res) => {
    try{

    }catch(error) {
        
    }
})
//EDIT - show user a form to edit the fruit

//SHOW - shows you 1 individual fruit





