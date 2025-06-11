const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3333

const corsOptions = {
  origin: 'http://10.60.76.23:5173',
}

app.use(cors(corsOptions))
app.use(bodyParser.json())

const mockData = {
  message: 'Hello World!'
}

app.get('/', (req, res) => {
  res.json({ message: 'This is a test API' })
})

app.get('/api/data', (req, res) => {
  res.json(mockData)
})

app.post('/api/echo', (req, res) => {
  const { testMessage } = req.body
  res.json('POST kördes, du skickade: ' + testMessage)
})

app.delete('/api/delete', (req, res) => {
  res.json('DELETE kördes, inget togs bort men endpointen nåddes fram.')
})

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`)
})