#!/usr/bin/env node

const program = require('commander');

program
  .version('1.0.2', '-v, --version')
  .description('randomkeygen is a cli tool for password generation')
  .option('-l, --length', 'String length')
  .option('-c, --charsets', 'Available Charsets: alpha, numeric, special, ultra')
  .option('-u, --upper', 'Uppercase string')
  .command('tiny', 'Generate tiny password', {isDefault: true})
  .command('strong', 'Generate strong password')
  .command('ultra', 'Generate ultra password')
  .command('codeigniter', 'Generate secret key for Codeigniter')

program.parse(process.argv);