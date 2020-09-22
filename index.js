const express = require('express');
//const url = require ('url');
//const qs = require('querystring');
//const fs = require('fs');

/*
const route = url.parse(req.url); 
const path = route.pathname;
const params = qs.parse(route.query);
console.log("path :", path);
console.log("params :", params);
*/

var app = express();
const monport = 8080
app.set('port', monport);
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

app.listen(monport, () => console.log(`server listening on ${monport}`)
)

  app.get('/', function (req, res) {
    res.status(200).send('la racine');
  })

  .get('/hello/:name', (req, res) => {
    res.render ('Root.ejs', {name: req.params.name})
  })

  .get('/hugo', function(req, res) {
    res.send('t est le boss')
  })