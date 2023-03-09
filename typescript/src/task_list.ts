/// <reference path="../typings/node/node.d.ts" />

import readline from 'readline';
import CommandLineService from './services/commandLineServices';

export class TaskList {
    static QUIT = 'quit';
    private readline;
    private commandLineServices = new CommandLineService();

    constructor(reader: NodeJS.ReadableStream, writer: NodeJS.WritableStream) {

        this.readline = readline.createInterface({
            terminal: false,
            input: reader,
            output: writer
        });

        this.readline.setPrompt("> ");
        this.readline.on('line', (cmd) => {
            if (cmd == TaskList.QUIT) {
                this.readline.close();
                return;
            }
            this.commandLineServices.execute(cmd);
            this.readline.prompt();
        });
        this.readline.on('close', () => {
            writer.end();
        });
    }



    run() {
        this.readline.prompt();
    }

}

if (require.main == module) {
    new TaskList(process.stdin, process.stdout).run()
}
