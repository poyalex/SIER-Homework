const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log('Server is running')
})


app.get('/greeting', function (req, res) {
    res.send('Hello')
})
app.get('/greeting/:name', function (req, res) {
    res.send(`Hello ${req.params.name}`)
})