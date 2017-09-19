const express = require('express');
const app = express();
const volleyball = require('volleyball');
app.use(volleyball);
const morgan = require('morgan');
morgan('tiny');
const nunjucks = require('nunjucks');


const http = require('http');
const server = http.createServer();
const PORT = 3000;

app.use(function (req, res, next) {
  // do your logging here
  // call `next`, or else your app will be a black hole — receiving requests but never properly responding
  console.log(`${req.method} ${req.url} ${res.statusCode}`);
  if (req.url.split('/')[1] === 'special') {
    console.log(`You reached the special area`);
  }
  next();
});


app.get('/', function (req, res) {
  res.send('Welcome to Twitter JS!');
});

app.get('/news', function (req, res) {
  res.send('Fake NEWS!!');
});

app.get('/special', function (req, res) {
  res.send('You reached the special area!!');
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});


var locals = {
  title: 'An Example',
  people: [
      { name: 'Gandalf'},
      { name: 'Frodo' },
      { name: 'Hermione'}
  ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
  if (err) {
    throw err;
  }
  console.log(output);
});
