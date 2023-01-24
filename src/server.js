const express = require('express');
const { addBook } = require('../routes/addBook');
//const books = require('../routes/books');

const server = express();

server.get('/', addBook);

module.exports = server;
