const cors = require('cors');
const express = require("express");
const routes = require('./routes');

// DB Connection
const conn = require('./database/dbConfig');
conn();

const app = express();
app.use(express.json());
app.use(cors({origin: 'https://trilha-full-stack.vercel.app'}));
app.use(routes);

app.listen(3334, function() {
  console.log("Node rodando na porta 3334")
})
