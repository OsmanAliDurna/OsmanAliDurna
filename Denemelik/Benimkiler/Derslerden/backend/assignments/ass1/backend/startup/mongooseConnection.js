const mongoose = require("mongoose")
const { CustomError } = require("../errors/customErrors")

const mongooseConnection = async () => {
    try {
        await mongoose.connect(process.env?.MongoDB)
        console.log("db connected")
    } catch (error) {
        console.log("db not connected")
        throw new CustomError("db connection is failed ")
    }
}

module.exports={mongooseConnection}