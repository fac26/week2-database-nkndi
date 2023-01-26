const express = require("express");

const { addBook } = require("../routes/addBook");
const { books } = require("../routes/books");
const { handleAddBook } = require("../routes/addBook");
const { sortBooks } = require("../routes/books");
const bodyParser = express.urlencoded();

const server = express();
const staticHandler = express.static("public");

server.use(staticHandler);

server.get("/", books);
server.get("/add-book", addBook);
server.post("/add-book", bodyParser, handleAddBook);
server.post("/", bodyParser, sortBooks);

module.exports = server;
