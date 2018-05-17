// logic class layer that is the top level of all API application functions
import express = require("express");
import {Environment} from "./environment";
import {connect} from "mongoose";
/**
 * Top level class of API logic
 */
export class Application {
  private _expressServer: express.Application;
  _environment: Environment;
  constructor(environment: Environment) {
    this._expressServer = express();
    this._environment = environment;
    this.configServer();
    this.startServer();
  }

  configServer(): void {
    connect(this._environment.databaseURI)
      .then(
        () => {console.log("Database Connected");},
        err => {console.log(err);}
      );
  }

  startServer():void {
    this._expressServer.listen(this._environment.port, () => {
      console.log("Application active on port: " + this._environment.port);
    });
  }
}