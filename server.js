const express = require('express')
const app = express()
var path = require('path');

app.use(express.static(path.join(__dirname, './')));

app.set('port', 3000);

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
