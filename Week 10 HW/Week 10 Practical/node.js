const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const items = []

// GET
app.get('/items', (req, res) => {
  res.json(items)
})

// POST
app.post('/items', (req, res) => {
  items.push(req.body)
  res.status(201).json(req.body)
})

// GET ID
app.get('/items/:id', (req, res) => {
  const item = items.find(b => b.id === parseInt(req.params.id))
  if (!item) return res.status(404).json({ message: 'Item not found' })
  res.json(item)
})

// PUT ID
app.put('/items/:id', (req, res) => {
  const item = items.find(b => b.id === parseInt(req.params.id))
  if (!item) return res.status(404).json({ message: 'Item not found' })

  Object.assign(item, req.body)
  res.json(item)
})

// DELETE
app.delete('/items/:id', (req, res) => {
  const index = items.findIndex(b => b.id === parseInt(req.params.id))
  if (index === -1) return res.status(404).json({ message: 'Item not found' })

  items.splice(index, 1)
  res.sendStatus(204)
})

app.listen(port, () => {
  console.log(`Wowza server running on http://localhost:${port}`)
})
