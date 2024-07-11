const express = require("express");
const app = express();

app.use(express.json());

app.get('/', (_request, response) => {
  return response.json({
    nome: "Marcelo Calsing"
  });
});


app.listen(3334)
console.log("Node rodando na porta 3334");