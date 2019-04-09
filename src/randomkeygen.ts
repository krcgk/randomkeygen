#!/usr/bin/env node

const program = require('commander');

function strong () {
  console.log('pgtstrong')
}

program
  .version('0.0.1', '-v, --version')
  .description('pg is a cli tool for password generation')
  .option('-l, --length', 'String length')
  .option('-c, --charsets', 'Available Charsets: alpha, numeric, special, ultra')
  .option('-u, --upper', 'Uppercase string')
  .command('tiny', 'Generate tiny password', {isDefault: true})
  .command('strong', 'Generate strong password')
  .command('ultra', 'Generate ultra password')
  .command('codeigniter', 'Generate secret key for Codeigniter')

program.parse(process.argv);