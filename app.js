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

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//   if (err) {
//     throw err;
//   }
//   console.log(output);
// });

app.use(function (req, res, next) {
  console.log(`${req.method} ${req.url} ${res.statusCode}`);
  // if (req.url.split('/')[1] === 'special') {
  //   console.log(`You reached the special area`);
  // }
  next();
});

app.get('/', function (req, res) {
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});





