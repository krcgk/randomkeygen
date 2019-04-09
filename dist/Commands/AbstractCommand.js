"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Charsets_1 = require("./../Statics/Charsets");
class AbstractCommand {
    constructor(length = 15, charsets) {
        this._length = length;
        this._charsets = charsets;
    }
    get length() {
        return this._length;
    }
    set length(length) {
        this._length = length;
    }
    get charsets() {
        return this._charsets;
    }
    set charsets(charsets) {
        this._charsets = charsets;
    }
    get chars() {
        let chars = [];
        this._charsets.map((charset) => {
            chars = chars.concat(Charsets_1.Charsets[charset]);
        });
        return chars;
    }
    generate() {
        let chars = this.chars;
        return Array.from(Array(this.length).keys()).map((chr) => {
            const random = Math.floor(Math.random() * (chars.length + 1));
            return chars[random];
        }).join('');
    }
    run() {
        return this.generate();
    }
}
exports.AbstractCommand = AbstractCommand;
