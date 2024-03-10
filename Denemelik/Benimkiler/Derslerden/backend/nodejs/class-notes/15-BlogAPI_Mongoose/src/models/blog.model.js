"use strict";

const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
    // _id,
    // categoryId,
    title: {
        type: String,
        trim: true,
        required: true
    },
    content: {
        type: String,
        trim: true,
        required: true
    },
    // createdAt,
    // updatedAt,

}, {
    collection: "blogPost",
    timestamps: true
})

// mongoose.model("model ismi", "hangi şema")

// const BlogPostModel = mongoose.model("BlogPosT", blogPostSchema)

module.exports({
    // BlogPost : BlogPostModel,
    BlogPost : mongoose.model("BlogPosT", blogPostSchema),
})

// const nameSchema = new mongoose.Schema({fields}, {tablo})

// const nameSchema = new mongoose.Schema(
//     {
//     // _id: // auto created and increment

//     // fieldName: String,
//     // fieldName2: BigInt,

//         // fieldName: {
//         //     type: String,
//         //     default: null,
//         //     trim: true,
//         //     unique: false,
//         //     select: true,
//         //     index: false,
//         // }

// },
// )