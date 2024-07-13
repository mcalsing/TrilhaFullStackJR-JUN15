const express = require("express");
const routes = require('./routes');

// DB Connection
const conn = require('./config/dbConfig');
conn();

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3334, function() {
  console.log("Node rodando na porta 3334")
})
