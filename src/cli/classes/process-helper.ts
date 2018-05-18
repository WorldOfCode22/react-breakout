export class ProcessHelper {
  public static getCommand(): string {
    return process.argv[2];
  }

  public static getCommandFlags(): string[] {
    return process.argv.splice(0,3);
  }
}