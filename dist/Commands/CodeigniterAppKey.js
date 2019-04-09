"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCommand_1 = require("./AbstractCommand");
class CodeigniterAppKey extends AbstractCommand_1.AbstractCommand {
    constructor(length = 32, charsets = ['alpha', 'numeric']) {
        super(length, charsets);
    }
    run() {
        return this.generate().toUpperCase();
    }
}
exports.CodeigniterAppKey = CodeigniterAppKey;
