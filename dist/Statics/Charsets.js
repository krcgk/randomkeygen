"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Charsets = {
    'alpha': Array.from(Array(26).keys()).map((chr) => {
        return String.fromCharCode(chr + 65);
    }).concat(Array.from(Array(26).keys()).map((chr) => {
        return String.fromCharCode(chr + 97);
    })),
    'numeric': Array.from(Array(10).keys()).map((chr) => {
        return String.fromCharCode(chr + 48);
    }),
    'special': ['#', '*', '@', '&', '?', '!', '.', ',', ':', ';', '='],
    'ultra': ['{', '}', '[', ']', '<', '>', '|', '/', '$', '_', '-', '~', '^'],
};
