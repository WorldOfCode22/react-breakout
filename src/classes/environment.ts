/**
 * Class that holds environmental var and settings
 */
export class Environment {
  private _port: number;
  constructor(port: number) {
    this._port = port;
  }

  get port(): number {
    return this._port;
  }
}