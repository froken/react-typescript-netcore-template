const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('public'));
app.use('/favicon.ico', express.static('public/favicon.ico'));

app.get('/*', function(req, res){
  var body = fs.readFileSync('./index.html', 'utf8');
  
  res.setHeader('Content-type', 'text/html');
  res.setHeader('Content-length', body.length);
  res.end(body);
});

app.listen(8090);
