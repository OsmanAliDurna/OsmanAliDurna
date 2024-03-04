"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json())

// Catch async-errors:
require('express-async-errors')

app.all('/', (req, res) => {
    res.send('WELCOME TO TODO API')
})

const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('sqlite:./db.sqlite3');

// define methodu sequelize modeli oluşturur:
// her bir model, veritabanında bir tabloya denk gelir.
// sequelize.define('tableName', { modelDetails })

const Todo = sequelize.define('todos' , {

    // id:{
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     unique: true,
    //     comment: 'description',
    //     primaryKey: true,
    //     autoIncrement: true,
    //     field: 'custom_name',
    //     defaultValue: 'default',
    // }
    
    title:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler worked.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));