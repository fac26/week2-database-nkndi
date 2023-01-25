const express = require('express');

const {addBook }= require('../routes/addBook');
const {books } = require('../routes/books');
const {handleAddBook} = require('../routes/addBook');
const bodyParser = express.urlencoded();

const server = express();

server.get('/', books);
server.get('/add-book', addBook);
server.post('/add-book',bodyParser, handleAddBook);
// server.post('/', books.sort);


module.exports = server;
