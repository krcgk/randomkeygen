import { AbstractCommand } from './AbstractCommand'
import { CommandInterface } from './CommandInterface'

export class TinyPassword extends AbstractCommand implements CommandInterface {
    constructor (length:number = 12, charsets:Array<string> = ['alpha','numeric']) {
        super(length, charsets)
    }
}