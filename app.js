var app = function () {
  var http = require('http');
  var request = require('request');
  var express = require('express');
  var logfmt = require("logfmt");
  var app = express();

  app.set('views', __dirname + '/views');
  app.engine('html', require('ejs').renderFile);

  app.use(express.bodyParser());
  app.get('/', function(req, res) {
    res.render('index.html');
  });
  app.post('/email', function(req, res) {
    var mandrillData = {
      'key': app.get('MANDRILL_KEY'),
      'message': req.body.message
    };

    request.post('https://mandrillapp.com/api/1.0/messages/send.json', 
      { body: JSON.stringify(mandrillData) },
      function (error, response, body) {
        res.json(response.statusCode, body);
      }
    );
  });

  app.configure(function() {
    app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname + '/bower_components'));
    app.use(logfmt.requestLogger());
  })

  return app;
}();

module.exports = app;

