const cors = require('cors');
const express = require("express");
const routes = require('./routes');

// DB Connection
const conn = require('./database/dbConfig');
conn();

const URL = 'https://trilha-full-stack.vercel.app';
// const URL = 'http://localhost:3000'

const app = express();
app.use(express.json());
app.use(cors({origin: URL}));

/* const allowedOrigins = ['https://trilha-full-stack.vercel.app', 'http://localhost:3000'];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir requisições sem origem (como Postman ou servidores internos)
    if (!origin) return callback(null, true);
    
    // Verifica se a origem está na lista de permitidas
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  }
})); */

app.use(routes);

app.listen(3334, function() {
  console.log("Node rodando na porta 3334")
})
