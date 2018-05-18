import { ProcessHelper } from "./classes/process-helper";
import { DevelopmentCommand } from "./classes/development-command";

function routeCommands(): void {
  switch(ProcessHelper.getCommand()) {
    case "development" || "dev":
    // tslint:disable-next-line:no-unused-expression
    new DevelopmentCommand(ProcessHelper.getCommand(), ProcessHelper.getCommandFlags());
  }
}

routeCommands();