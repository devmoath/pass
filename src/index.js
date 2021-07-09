#!/usr/bin/env node
const program = require('commander').program;
const createPassword = require('./createPassword');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

const info = require('../package.json');

program
    .version(info.version)
    .description(info.description)
    .option('-l, --length <number>', 'length of the password', '8')
    .option('-n, --no-numbers', 'remove numbers')
    .option('-s, --no-symbols', 'remove symbols')
    .parse();

const { length, numbers, symbols } = program.opts();

const password = createPassword(length, numbers, symbols);

clipboardy.writeSync(password);

console.log(chalk.green('Generated Password: ') + password);
console.log(chalk.blue('Password copied to clipboard'));
