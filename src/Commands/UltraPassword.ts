import { AbstractCommand } from './AbstractCommand'
import { CommandInterface } from './CommandInterface'

export class UltraPassword extends AbstractCommand implements CommandInterface {
    constructor (length:number = 50, charsets:Array<string> = ['alpha','numeric','special','ultra']) {
        super(length, charsets)
    }
}