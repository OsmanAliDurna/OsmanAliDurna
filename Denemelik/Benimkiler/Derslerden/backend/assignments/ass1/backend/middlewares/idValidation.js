"use strict"

const {
    default: mongoose
} = require("mongoose");
const {
    CustomError
} = require("../errors/customErrors");

const idValidation = (req, res, next) => {
    const idIsValid = mongoose.Types.ObjectId.isValid(req.params.id);
    if (!idIsValid) {
        throw new CustomError("id is not valid.", 400)
    }
    next();
};

module.exports = {
    idValidation
}