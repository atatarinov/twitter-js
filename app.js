const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer();
const PORT = 3000;

app.get('/', function (req, res) {
  res.send('Welcome to Twitter JS!');
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
