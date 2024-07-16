const mongoose = require('mongoose');
require('dotenv').config();
const username = process.env.username;
const password = process.env.password;

const dbconfig = `mongodb+srv://${username}:${password}@cluster0.bqjckc5.mongodb.net/codigo_certo?retryWrites=true&w=majority&appName=Cluster0`;

async function main() {
  try {
    mongoose.set("strictQuery", true)

    await mongoose.connect(dbconfig)
    console.log("Conectado ao banco!")

  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;





