const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log('Server is running')
})

//Greeting
app.get('/greeting/:name', function (req, res) {
    res.send(`Hello ${req.params.name}`)
})

//Tip
app.get('/tip/:total/:tipPercentage', function (req, res) {
    res.send(`Your tip will be ${req.params.total*(req.params.tipPercentage*.01)} dollaridoos mate`)
})

//Magic 8 Ball
app.get('/magic/:phrase', function (req, res) {
    res.send(
        
    )
})

//Fibonacci
