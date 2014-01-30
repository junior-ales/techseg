[![Build Status](https://snap-ci.com/zfisnXmvZlzbdaD1FRigWBmxWPzS-MXZwtcnU2UZDI0/build_image)](https://snap-ci.com/projects/junior-ales/techseg/build_history)

# Site da Tech Seg Consultoria

### Desenvolvimento

- Adicione um arquivo chamado `localConfig.js` na raiz do projeto com o seguinte conteudo:

<pre>
  <code>
    var config = {}
    config.mandrillKey = '[AQUI_VAI_A_API_KEY_DO_MANDRILL]';
    config.emailReceiver = '[AQUI_VAI_UM_ENDERECO_DE_EMAIL]';
    module.exports = config;
  </code>
</pre>

- `$ node start.js` para rodar localmente a aplicação;

GruntJS Taks para auto reload do Chrome: 
- Mantendo o Chrome aberto em localhost:3000 
- `$ grunt`;

### Tech Stack

- Nodejs 0.10.22;
- Express 3.4.8;
- Bower 1.2.8; 
- Foundation 5;
- GruntJS;
- [Mandrill Email App](https://mandrillapp.com);
- [Snap-CI](http://www.snap-ci.com);
- Heroku;
