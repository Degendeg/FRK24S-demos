import "dotenv/config"
import express from "express"
import cors from "cors"
import mysql from "mysql2"

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

db.getConnection((err, conn) => {
    if (err) {
        console.error('❌ Db connection failed', err.message)
    } else {
        console.log('✅ Connected to db')
        conn.release()
    }
})

/**
 * @route GET /
 * @descr Test route to check if server is running
 */
app.get("/", (req, res) => {
    res.json("Hello World!")
})

/**
 * @route GET /books
 * @descr Fetch all books from the db
 */
app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if (err) {
            console.log(err)
            return res.json(err)
        }
        return res.json(data)
    })
})

/**
 * @route GET /books/:id
 * @descr Fetch a single book by ID
 */
app.get("/book/:id", (req, res) => {
    const bookId = req.params.id
    const q = "SELECT id, title, `desc`, price, cover " +
        "FROM books WHERE id = ?"
    db.query(q, [bookId], (err, data) => {
        if (err) {
            console.log(err)
            return res.json(err)
        }
        return res.json(data)
    })
})

/**
 * @route POST /books
 * @descr Add a new book to the db
 */
app.post("/books", (req, res) => {
    const q = "INSERT INTO books(`title`, `desc`, `price`, `cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ]

    db.query(q, [values], (err, data) => {
        if (err) {
            return res.send(err)
        }
        return res.json("Successfully added book with id: " + data.insertId)
    })
})

/**
 * @route PUT /books/:id
 * @desc Update a book by ID
 */
app.put("/books/:id", (req, res) => {
    const bookId = req.params.id
    const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?"

    const price = parseFloat(req.body.price)
    if (isNaN(price) || price <= 0) {
        return res.status(400).json({ message: '❌ Invalid price!' })
    }

    const values = [
        req.body.title,
        req.body.desc,
        price,
        req.body.cover,
    ]
    db.query(q, [...values, bookId], (err, data) => {
        if (err) {
            return res.send(err)
        }
        if (data.affectedRows > 0) {
            return res.json(data)
        }
        return res.json("⚠️ No books has been updated, check your book id.")
    })
})

/**
 * @route DELETE /books/:id
 * @descr DELETE a book by ID
 */
app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id
    const q = "DELETE FROM books WHERE id = ?"

    db.query(q, [bookId], (err, data) => {
        if (err) {
            return res.send(err)
        }
        if (data.affectedRows > 0) {
            return res.json(data)
        }
        return res.json("⚠️ No book has been removed, check id.")
    })
})

const port = process.env.PORT || 8800
app.listen(port, () => {
    console.log(`✅ Connected to server : ${port}`)
})