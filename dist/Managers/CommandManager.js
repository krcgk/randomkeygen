"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandManager {
    constructor(commands = {}) {
        this._commands = commands;
    }
    get commands() {
        return this._commands;
    }
    set commands(commands) {
        this._commands = commands;
    }
    exists(command) {
        if (typeof command === 'string') {
            return this._commands[command] !== undefined;
        }
        return this._commands[command.constructor.name] !== undefined;
    }
    run(command, length) {
        if (this.exists(command) === false) {
            throw new Error('Command Not Found');
        }
        let comm = this._commands[command];
        if (length) {
            comm.length = length;
        }
        return comm.run();
    }
}
exports.CommandManager = CommandManager;
