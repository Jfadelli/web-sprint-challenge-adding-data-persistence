const express = require('express');

const server = express();

const router = require('./router/routes.js')
server.use(express.json());
server.use('/api', router)

server.get('/', (req, res) => {
    res.send('Server running...')
})

module.exports = server;
