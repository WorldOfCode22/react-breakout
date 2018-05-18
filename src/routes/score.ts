import express = require("express");

/**
 * Router to handel score functions accessed by api/score
 */
const scoreRouter: express.Router = express.Router();

scoreRouter.post("/", (req, res) => {
  const {user, score} = req.query;
  if(user && score) {
    res.status(200).end();
  } else {
    res.status(400).json({error: "Missing required value"});
  }
});

export {scoreRouter};