require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = 3000
const secretKey = process.env.SECRET_KEY

// dummy db / users 
const users = [
  {
    id: 1,
    username: 'degen',
    password: 'sebbe',
    role: 'user'
  },
  {
    id: 2,
    username: 'user2',
    password: 'pwd2',
    role: 'user'
  },
  {
    id: 3,
    username: 'admin',
    password: 'admin',
    role: 'admin'
  },
]

app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors())

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization']
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1]
    req.token = bearerToken
    next()
  } else {
    res.status(403).json({ message: 'No JWT, forbidden' })
  }
}

app.get('/', (req, res) => {
  res.json('Hello FRK24S!')
})

app.get('/api/public', (req, res) => {
  res.json({ message: 'This is a public endpoint' })
})

app.post('/api/login', (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'send correct data noob' })
  }
  const { username, password } = req.body
  // dummy auth logic
  const user = users.find(u => u.username === username && u.password === password)
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' })
  }
  // generate JWT
  const token = jwt.sign({
    id: user.id,
    username: user.username,
    role: user.role,
  }, secretKey, { expiresIn: '1h' })

  res.json({ token })
})

app.get('/api/dashboard', verifyToken, (req, res) => {
  jwt.verify(req.token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' })
    }
    res.json({ message: 'This is the dashboard endpoint', user: decoded })
  })
})

app.get('/api/admin', verifyToken, (req, res) => {
  jwt.verify(req.token, secretKey, (err, decoded) => {
    if (err || decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Admins only' })
    }
    res.json({ message: 'Welcome, admin!', user: decoded })
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})