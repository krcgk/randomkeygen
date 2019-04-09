"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCommand_1 = require("./AbstractCommand");
class StrongPassword extends AbstractCommand_1.AbstractCommand {
    constructor(length = 36, charsets = ['alpha', 'numeric', 'special']) {
        super(length, charsets);
    }
}
exports.StrongPassword = StrongPassword;
