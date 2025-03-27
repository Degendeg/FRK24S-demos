import express from "express"
import cors from "cors"
// import mysql from "mysql2"

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.json("Hello World!")
})

const port = process.env.PORT || 8800
app.listen(port, () => {
    console.log(`✅ Connected to server : ${port}`)
})