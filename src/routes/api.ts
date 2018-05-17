import express = require("express");
import {scoreRouter} from "./score";
/**
 * The top router of api functions
 */
let router: express.Router = express.Router();

router.use("/score", scoreRouter);

export {router};