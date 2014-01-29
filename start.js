var app = require("./app");
var localConfig = require('./localConfig');
var port = process.env.PORT || 3000;
var key = process.env.MANDRILL_KEY || localConfig.mandrillKey;

app.set('MANDRILL_KEY', key);
app.listen(port)

