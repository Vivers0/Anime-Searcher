import { Client } from "./core/Client";
import { CommandHandler } from "./Handler/CommandHandler";

class Main extends Client {
    cmdHandler () {
        let cmds = new CommandHandler(this.init);
        cmds.handleMessage();
    }
}

const client = new Main();
client.cmdHandler()