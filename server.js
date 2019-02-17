var express = require('express');
var cors = require('cors')
var app = express();
var path = require('path')
var compression = require('compression')
var corsOptions = {
    origin: 'http://localhost:2000',
    credentials: true,

}
const PORT = process.env.PORT

app.use(cors(corsOptions));

app.use(compression())

app.use(express.static(path.join(__dirname,'client', 'build')));

app.get(function (req, res) {
  res.sendFile(path.join(__dirname, 'client','build', 'index.html'));
});




var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
