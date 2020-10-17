// importa pacote
const express = require('express');
const path = require('path');

// iniciando o express
const server = express()
server

  //utilizando os aquivos staticos
  .use(express.static('public'))

  // configurar template engine
  .set('views', path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  // criar um rota
  .get('/', (request, response) => {
    return response.render('index')
  })

// ligar o servidor 
server.listen(5500)