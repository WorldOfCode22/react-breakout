import { Command } from "./command";

export class DevelopmentCommand extends Command {
  constructor(command: string, flags: string[]) {
    super(command, flags);
    this.test();
  }

  public test():void {
    process.stdout.write("Starting Development Command");
  }
}