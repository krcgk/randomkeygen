"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCommand_1 = require("./AbstractCommand");
class UltraPassword extends AbstractCommand_1.AbstractCommand {
    constructor(length = 50, charsets = ['alpha', 'numeric', 'special', 'ultra']) {
        super(length, charsets);
    }
}
exports.UltraPassword = UltraPassword;
