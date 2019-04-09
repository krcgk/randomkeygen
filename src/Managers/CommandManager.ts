import { CommandInterface } from './../Commands/CommandInterface'

export class CommandManager {

    private _commands:object

    constructor (commands:object = {}) {
        this._commands = commands
    }

    get commands ():object {
        return this._commands
    }

    set commands (commands:object) {
        this._commands = commands
    }

    exists (command:CommandInterface|string): boolean {
        if (typeof command === 'string') {
            return this._commands[command] !== undefined
        } 

        return this._commands[command.constructor.name] !== undefined
    }

    run (command:string, length?:number):string {
        if (this.exists(command) === false) {
            throw new Error('Command Not Found')
        }

        let comm:CommandInterface = this._commands[command]

        if (length) {
            comm.length = length
        }

        return comm.run()
    }
}
