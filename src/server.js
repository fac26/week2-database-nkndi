const express = require('express');
const route1 = require('../routes/route1.js');

const server = express();

server.get('/', route1.get);

module.exports = server;
