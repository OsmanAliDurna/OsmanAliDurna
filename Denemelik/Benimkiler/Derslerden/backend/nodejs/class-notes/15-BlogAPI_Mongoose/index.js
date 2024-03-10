const express = require("express")
const app = express()

app.use(express.json()) // Yukarıda olması best practice

require('dotenv').config()

const PORT = process.env.PORT
const HOST = process.env.HOST

app.all('/', (req, res) => {
    res.send('Welcome')
})

app.use(require('./src/errorHandler')) // Aşağıda olması best practice

app.listen(PORT, () => console.log(`Server Running on http://${HOST}:${PORT}`))