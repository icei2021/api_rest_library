const express = require("express");
const route = express.Router();
const {getBooks, postBook, getBookByID, putBook, deleteBook} = require("../controllers/Book.controller");
route
    .route("/")
    .get(getBooks)
    .post(postBook)

route
    .route("/:id")
    .get(getBookByID)
    .put(putBook)   
    .delete(deleteBook)


module.exports = route;

