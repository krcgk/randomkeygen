"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCommand_1 = require("./AbstractCommand");
class TinyPassword extends AbstractCommand_1.AbstractCommand {
    constructor(length = 12, charsets = ['alpha', 'numeric']) {
        super(length, charsets);
    }
}
exports.TinyPassword = TinyPassword;
