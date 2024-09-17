  const express = require('express');
  const path = require('path');
  const app = express();// CRIADO UMA INSTÂNCIA DE EXPRESS

  const PORT = 33333
  app.get('/', function(req, res){
    res.send("oi página home");
  });

  app.get('/sobre', function(req, res){
    res.send("<h1>página sobre</h1>");
  })
  app.get('/sobre', function(req, res){
    res.sendFile(path.join( __dirname, "/", "/loja.html"));
  })

  app.listen(PORT, function(){
   console.log('Rodando na porta: ' + PORT)
  });
