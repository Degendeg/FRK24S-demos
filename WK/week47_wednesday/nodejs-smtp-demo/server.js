const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config()

var app = express();
app.use(express.json());
app.use(cors())

app.get('/', (req, res, next) => {
  res.json("Hello World!")
})

app.post('/send', async (req, res) => {
  try {
    const { from, name, to, subject, text } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: 'From: ' + from + '\n' + 'Name: ' + name + '\n\n' + text
    }

    // skickar mejlet
    const info = await transporter.sendMail(mailOptions)

    console.log('Email sent:', info.response)
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email' })
  }
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

module.exports = app;