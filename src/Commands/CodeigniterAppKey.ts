import { AbstractCommand } from './AbstractCommand'
import { CommandInterface } from './CommandInterface'

export class CodeigniterAppKey extends AbstractCommand implements CommandInterface {
    constructor (length:number = 32, charsets:Array<string> = ['alpha','numeric']) {
        super(length, charsets)
    }

    run ():string {
        return this.generate().toUpperCase()
    }
}