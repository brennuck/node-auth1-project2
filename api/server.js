const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;
