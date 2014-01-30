var app = require("./app");

var localConfig = function() {
  try {
    return require('./localConfig');
  } catch(e) {
    console.error('Problema com configuração local e/ou variaveis de ambiente não foram criadas corretamente. Em ambiente de desenvolvimento, verifique se o localConfig.js foi criado na raiz do projeto. Mais informações no README');
    process.exit(e.code);
  }
}();

var port = process.env.PORT || 3000;
var key = process.env.MANDRILL_KEY || localConfig.mandrillKey;
var email = process.env.EMAIL_RECEIVER || localConfig.emailReceiver;

app.set('MANDRILL_KEY', key);
app.set('EMAIL_RECEIVER', email);
app.listen(port);

