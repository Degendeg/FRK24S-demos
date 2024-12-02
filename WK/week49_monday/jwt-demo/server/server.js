require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;
const secretKey = process.env.SECRET_KEY;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Dummy user data, no db 😔
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Dummy auth logic 🫣
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // Generate JWT ✍️
  const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' }); // Expires in 1 hour

  // Return JWT
  res.json({ token });
});

app.get('/api/public', (req, res) => {
  res.json({ message: 'This is a public endpoint' });
});

app.get('/api/restricted', (req, res, next) => {
  const origin = req.headers.origin;

  // Allow only a specific origin
  const allowedOrigin1 = 'http://example.com';
  const allowedOrigin2 = 'http://localhost:5173'; // använd för att se OK
  if (origin === allowedOrigin1) {
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin1);
    res.json({ message: 'Access granted to restricted endpoint' });
  } else {
    res.status(403).json({ message: 'CORS policy blocks this origin' });
  }
});

// Private route
app.get('/api/private', verifyToken, (req, res) => {
  jwt.verify(req.token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    res.json({ message: 'This is a private endpoint', user: decoded });
  });
});

// Verify JWT 🕵️
function verifyToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (token) {
    req.token = token;
    next();
  } else {
    res.status(403).json({ message: 'Unauthorized' });
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});