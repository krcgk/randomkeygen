import { AbstractCommand } from './AbstractCommand'
import { CommandInterface } from './CommandInterface'

export class StrongPassword extends AbstractCommand implements CommandInterface {
    constructor (length:number = 36, charsets:Array<string> = ['alpha','numeric','special']) {
        super(length, charsets)
    }
}