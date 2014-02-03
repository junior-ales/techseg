var app = function () {
  var http = require('http');
  var request = require('request');
  var express = require('express');
  var sass = require('node-sass');
  var path = require('path');
  var logfmt = require("logfmt");
  var app = express();

  app.engine('html', require('ejs').renderFile);

  var sassConfig = {
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public'),
    outputStyle: 'compressed',
    imagePath: path.join(__dirname, 'public', 'img'),
  };
  app.use(sass.middleware(sassConfig));

  app.set('views', path.join(__dirname, 'views'));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.static(path.join(__dirname, 'bower_components')));

  app.use(logfmt.requestLogger());

  app.use(express.bodyParser());
  app.get('/', function(req, res) {
    res.render('index.html');
  });
  app.post('/email', function(req, res) {
    var mandrillData = {};
    mandrillData.key = app.get('MANDRILL_KEY');
    mandrillData.message = req.body.message;
    mandrillData.message.to[0].email = app.get('EMAIL_RECEIVER');

    request.post('https://mandrillapp.com/api/1.0/messages/send.json', 
      { body: JSON.stringify(mandrillData) },
      function (error, response, body) {
        if(!response) { res.json(500, error); }
        res.json(response.statusCode, body);
      }
    );
  });

  return app;
}();

module.exports = app;

