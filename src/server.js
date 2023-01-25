const express = require('express');
const { addBook, submit } = require('../routes/addBook');
const { books } = require('../routes/books');


const server = express();

server.get('/', books);
server.get('/add-book', addBook);

// server.post('/', books.sort);
server.post('/add-book', submit);

module.exports = server;
