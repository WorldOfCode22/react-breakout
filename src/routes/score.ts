import express = require("express");

const scoreRouter: express.Router = express.Router();

scoreRouter.get("/", (req, res) => {
  res.send("TEST");
});

export {scoreRouter};