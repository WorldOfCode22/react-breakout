export class Command {
  command: string;
  flags: string[];
  constructor(command: string, flags: string[]) {
    this.command = command;
    this.flags = flags;
  }
}