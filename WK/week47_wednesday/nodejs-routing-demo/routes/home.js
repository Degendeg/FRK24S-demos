const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/home', (req, res) => {
  // skickar filen index.html som respons, __dirname är sökvägen till filen i fråga, och path.join kombinerar sökvägen med ../public/index.html
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router