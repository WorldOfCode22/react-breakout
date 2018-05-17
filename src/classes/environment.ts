/**
 * Class that holds environmental var and settings
 */
export class Environment {
  private _port: number;
  private _databaseURI: string;
  constructor(port: number, databaseURI: string) {
    this._port = port;
    this._databaseURI = databaseURI;
  }

  get port(): number {
    return this._port;
  }

  get databaseURI(): string {
    return this._databaseURI;
  }
}