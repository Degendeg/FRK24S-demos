import express from 'express'
import bcrypt from 'bcryptjs'
import cors from 'cors'
import fs from 'fs'

const app = express()
app.use(express.json())
app.use(cors())

const DB_FILE = './db.json'

if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify({ users: [] }, null, 2))
}

app.get("/users", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DB_FILE))
  res.json(data.users)
})

app.post("/register", async (req, res) => {
  const { username, hash } = req.body
  if (!username || !hash) {
    return res.status(400).json({ error: 'Missing username or password' })
  }

  const data = JSON.parse(fs.readFileSync(DB_FILE))

  if (data.users.find((u) => u.username === username)) {
    return res.status(400).json({ error: 'User already exists!' })
  }

  data.users.push({ username, hash })
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2))

  res.json({ message: 'User registered!' })
})

app.post("/login", async (req, res) => {
  const { username, password } = req.body
  const data = JSON.parse(fs.readFileSync(DB_FILE))
  const user = data.users.find((u) => u.username === username)

  if (!user) {
    return res.status(400).json({ error: 'User not found!' })
  }

  const match = await bcrypt.compare(password, user.hash)
  if (!match) {
    return res.status(401).json({ error: 'Invalid username and/or password, try again!' })
  }

  res.json({ message: 'Login succesful!' })
})

app.listen(5000, () => console.log("Server running on localhost:5000"))