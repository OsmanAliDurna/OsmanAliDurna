"use strict"
const express = require("express");
const { mongooseConnection } = require("./startup/mongooseConnection");
const {todoRouter} = require("./routes/todo.routes")

const app = express()

app.use(express.json())

require("dotenv").config()
const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "127.0.0.1";

// app.get('/',(req,res)=>{
//     res.send("Hi")
// })

require("express-async-errors")
app.use(todoRouter)
app.use(require('./middlewares/errorHandler'))
mongooseConnection();
app.listen(PORT, ()=> console.log(`Listening http://${HOST}:${PORT}`))
