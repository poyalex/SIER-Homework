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
    const magicAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    res.send(`<h1>${req.params.phrase}</h1><br></br>${magicAnswers[Math.floor(Math.random()*(magicAnswers.length-1))]}`)
})

//Fibonacci
app.get('/fibonacci/:number', function(req, res) {
    const fTestPlus = (5*(req.params.number**2)+4)
    const fTestMinus = (5*(req.params.number**2)-4)
    console.log(fTestMinus)
console.log (fTestPlus)

    if (req.params.number === 0 || req.params.number === 1) {
        res.send('I can tell this is a Fibonacci Number')
    } else if (Math.sqrt(fTestPlus)%1 === 0|| Math.sqrt(fTestMinus)%1 === 0) {
        res.send('I can tell this is a Fibonacci Number')
    } else {
        res.send('This is no fibonacci number')
    }
})