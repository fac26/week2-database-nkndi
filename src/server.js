const express = require('express');
const { addBook } = require('../routes/addBook');
const { books } = require('../routes/books');

const server = express();

server.get('/', books);
server.get('/add-book', addBook);

// server.post('/', books.sort);
// server.post('/add-book', addBook.submit);

module.exports = server;
