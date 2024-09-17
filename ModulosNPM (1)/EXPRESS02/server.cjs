//CRIAR NOSSO SERVIDOR
const express = require("express");
const path = require("path");
const app = express();

const PORT = 33333;     // 65K POSSIBILIDADES

//CRIAR ROTAS
app.get("/", function(req, res) {
  // NOSSO CODIGO VEM AQUI...
  res.sendFile(__dirname + "/public/pages/index.html")
});

app.get("/", function(req, res) {
  // NOSSO CODIGO VEM AQUI...
  res.sendFile(__dirname + "/public/pages/loja.html")
});

app.get("/", function(req, res) {
  // NOSSO CODIGO VEM AQUI...
  res.sendFile(__dirname + "/public/pages/sobre.html")
});
app.get("/", function(req, res) {
  // NOSSO CODIGO VEM AQUI...
  res.sendFile(__dirname + "/public/pages/404.html")
});
// USAR O SERVIDOR NUMA DADA PORTA
app.listen(PORT, function() {
  console.log("Rodando na porta: " + PORT);
});
