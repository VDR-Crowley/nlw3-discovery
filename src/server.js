// importa pacote
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando o express
const server = express()
server

  // utilizar o body da request
  .use(express.urlencoded({ extended: true }))

  //utilizando os aquivos staticos
  .use(express.static('public'))

  // configurar template engine
  .set('views', path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  // criar um rota
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOphanage)
  .post('/save-orphanage', pages.saveOrphanage)

// ligar o servidor 
server.listen(5500)