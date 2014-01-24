var app = function () {
  var http = require('http');
  var express = require('express');
  var logfmt = require("logfmt");
  var app = express();

  app.set('views', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);
  app.get('/', function(req, res) {
    res.render('index.html');
  });
  app.configure(function() {
    app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname + '/bower_components'));
    app.use(logfmt.requestLogger());
  })

  return app;
}();

module.exports = app;

