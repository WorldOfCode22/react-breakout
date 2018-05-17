// entry point of application

import {Application} from "./classes/application";
import {environment} from "./config/env";
const app: Application = new Application(environment);