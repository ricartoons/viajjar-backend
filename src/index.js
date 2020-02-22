const express = require('express');
const rotas = require('./routes/routes');

const app = express();

//entrypoint
app.use('/', rotas);

//Listem
app.listen(3000, () => {
  console.log('O servidor está rodando na porta 3000');
})