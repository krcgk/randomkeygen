import { CommandInterface } from './CommandInterface'
import { Charsets } from './../Statics/Charsets'

export abstract class AbstractCommand implements CommandInterface {
    private _length:number
    private _charsets:Array<string>
    
    constructor (length:number = 15, charsets:Array<string>) {
        this._length = length
        this._charsets = charsets
    }

    get length ():number {
        return this._length
    }

    set length (length:number) {
        this._length = length
    }

    get charsets ():Array<string> {
        return this._charsets
    }

    set charsets (charsets:Array<string>) {
        this._charsets = charsets
    }

    get chars ():Array<string> {
        let chars = []

        this._charsets.map((charset) => {
            chars = chars.concat(Charsets[charset])
        })

        return chars
    }

    generate ():string {
        let chars = this.chars

        return Array.from(Array(this.length).keys()).map((chr) => {
            const random:number = Math.floor(Math.random() * (chars.length + 1))
            return chars[random]
        }).join('')
    }

    run ():string {
        return this.generate()
    }
}