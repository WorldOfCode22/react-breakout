import express = require("express");

/**
 * Router to handel score functions accessed by api/score
 */
const scoreRouter: express.Router = express.Router();

scoreRouter.get("/", (req, res) => {
  res.send("TEST");
});

export {scoreRouter};