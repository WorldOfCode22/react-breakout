import express = require("express");
import {scoreRouter} from "./score";

let router: express.Router = express.Router();

router.use("/score", scoreRouter);

export {router};