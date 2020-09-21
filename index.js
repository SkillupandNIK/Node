const handles = require('./handles.js');
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

app.listen(
  app.get('port'),
  () => console.log(`server listening on ${monport}`)
)

  app.get('/', function (req, res) {
    res.send('racine')
  })


  .get('/hugo', function(req, res) {
    res.send('t est le boss')
  })

// Declare an http server

// curl localhost:8080 or go to http://localhost:8080