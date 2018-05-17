// logic class layer that is the top level of all API application functions
import express = require("express");
import {Environment} from "./environment";
/**
 * Top level class of API logic
 */
export class Application {
  private _expressServer: express.Application;
  port: number;
  constructor(environment: Environment) {
    this._expressServer = express();
    this.port = environment.port;
    this.startServer();
  }

  startServer():void {
    this._expressServer.listen(this.port, () => {
      console.log("Application active on port: " + this.port);
    });
  }
}