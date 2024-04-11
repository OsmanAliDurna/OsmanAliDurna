"use strict";
const express = require("express");
const {
    todo
} = require("../controllers/todo.controllers");
const todoRouter = express.Router();

todoRouter.route("/").get(todo.list).post(todo.create);

todoRouter.route("/:id").get().put().patch().delete()