require("dotenv").config();
const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
