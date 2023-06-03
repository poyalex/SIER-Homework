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

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

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
//res.render does not need the forward slash before fruitsspecifically 
app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New')
})

//DELETE - backend only functionality that is used to delete a fruit

//UPDATE - backend only functionality that is used to update a fruit

//CREATE - backend only functionality that is used to create a fruit
app.post('/vegetables', async (req, res) => {
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true
    }else {
        req.body.readyToEat = false
    }
    try{
        const createdVegetable = await Vegetable.create(req.body)
        res.send(createdVegetable)
    }catch(error) {
        res.status(400).send({message: error.message})
    }
})
//EDIT - show user a form to edit the fruit

//SHOW - shows you 1 individual fruit





