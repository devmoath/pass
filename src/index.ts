#!/usr/bin/env ts-node
import { program } from 'commander';
import { createPassword } from './createPassword';
import chalk from 'chalk';
import clipboardy from 'clipboardy';

program
    .version('0.1.0')
    .description('Node.js cli to generate passwords')
    .option('-l, --length <number>', 'length of the password', '8')
    .option('-n, --no-numbers', 'remove numbers')
    .option('-s, --no-symbols', 'remove symbols')
    .parse();

const { length, numbers, symbols } = program.opts();

const password = createPassword(length, numbers, symbols);

clipboardy.writeSync(password);

console.log(chalk.green('Generated Password: ') + password);
console.log(chalk.green('Password copied to clipboard'));
