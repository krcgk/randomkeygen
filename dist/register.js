"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CommandManager_1 = require("./Managers/CommandManager");
const TinyPassword_1 = require("./Commands/TinyPassword");
const StrongPassword_1 = require("./Commands/StrongPassword");
const UltraPassword_1 = require("./Commands/UltraPassword");
const CodeigniterAppKey_1 = require("./Commands/CodeigniterAppKey");
const commandManager = new CommandManager_1.CommandManager();
commandManager.commands = {
    tinyPassword: new TinyPassword_1.TinyPassword(),
    strongPassword: new StrongPassword_1.StrongPassword(),
    ultraPassword: new UltraPassword_1.UltraPassword(),
    codeigniterAppKey: new CodeigniterAppKey_1.CodeigniterAppKey(),
};
exports.default = commandManager;
