var app = require('./app');

var key, email;
if (process.env.MANDRILL_KEY && process.env.EMAIL_RECEIVER) {
  key = process.env.MANDRILL_KEY;
  email = process.env.EMAIL_RECEIVER;
} else {
  try {
    var localConfig = require('./localConfig');
    key = localConfig.mandrillKey;
    email = localConfig.emailReceiver;
  } catch(e) {
    console.error('Problema com configuração local e/ou variaveis de ambiente não foram criadas corretamente. Em ambiente de desenvolvimento, verifique se o localConfig.js foi criado na raiz do projeto. Mais informações no README');
    process.exit(e.code);
  }
}

app.set('MANDRILL_KEY', key);
app.set('EMAIL_RECEIVER', email);
app.listen(process.env.PORT || 3000);

