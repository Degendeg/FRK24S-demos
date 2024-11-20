const express = require('express')
const router = express.Router()

router.get('/data', (req, res) => {
  const exampleData = {
    message: 'Hello World',
    timestamp: new Date().toISOString()
  }
  res.json(exampleData)
})

module.exports = router