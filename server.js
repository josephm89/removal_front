var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var path = require("path");
//var compression = require('compression')

//var cors = require('cors')
//var corsOptions = {
// origin: '*',
// origin: 'https://removal.herokuapp.com',
// credentials: true,
//}

//app.use(cors(corsOptions));

//app.use(compression())

//var cors = require("cors");
//app.use(cors({ credentials: true, origin: "http://localhost:5000" }));

app.use(express.static(path.join(__dirname, "client", "build")));

app.get(function (req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log("Server is running"));

//var server = app.listen(port, function () {
//  var host = server.address().address;
// var port = server.address().port;

//  console.log('Example app listening at http://%s:%s', host, port);
//});
