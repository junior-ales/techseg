[ ![Codeship Status for junior-ales/techseg](https://www.codeship.io/projects/c20b5df0-66cd-0131-7b0a-7ac0e27144fd/status?branch=master)](https://www.codeship.io/projects/12637)
# Site da Tech Seg Consultoria

### Desenvolvimento

- Adicione um arquivo chamado `localConfig.js` na raiz do projeto com o seguinte conteudo:
`
var config = {}
config.mandrillKey = '[AQUI_VAI_A_API_KEY_DO_MANDRILL]';
module.exports = config;
`

- `$ node start.js` para rodar localmente a aplicação;

GruntJS Taks para auto reload do Chrome: 
- Mantendo o Chrome aberto em localhost:3000 
- `$ grunt watch`;

### Tech Stack

- Nodejs 0.10.22;
- Express 3.4.8;
- Bower 1.2.8; 
- Foundation 5;
- GruntJS;
- Mandrill Email App;
- Codeship.io;
- Heroku;
