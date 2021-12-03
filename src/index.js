//aqui faço a importação do express 
const express = require('express');

//aqui faço a criação da variável que vai utilizar o framework
const app = express();

//fazendo o uso do framework express, onde a aplicação vai estar rodando
app.listen(3333); //com o listen faço com que o express entenda que a aplicação deve ser iniciada

app.get("/", (request, response) => {
  return response.json({message: "Hello world ignite!" });
});