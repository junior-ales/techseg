var app = require("./app");

var localKey = function() {
  try {
    return require('./localConfig').mandrillKey;
  } catch(e) {
    console.error('Problema com configuração local. Criou o localConfig.js na raiz do projeto? Mais info no README');
    process.exit(e.code);
  }
}

var port = process.env.PORT || 3000;
var key = process.env.MANDRILL_KEY || localKey();


app.set('MANDRILL_KEY', key);
app.listen(port)

