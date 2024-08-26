require("dotenv").config();
const { Client } = require("pg");

const client = new Client(process.env.DATABASE_URL);

client
  .connect()
  .then(() => console.log("Connected to PostgreSQL database"))
  .catch((err) => console.error("Error connecting to the database:", err));

module.exports = client;
