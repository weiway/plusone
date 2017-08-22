#!/usr/bin/env node

const ncp = require("copy-paste");
const c = require('chalk');
const program = require('commander');
const VERSION = require('./package.json').version;
const log = console.log;

program.version(VERSION)
  .option('-M, --minute', 'Plus one minute')
  .option('-H, --hour', 'Plus one hour')
  .option('-D, --day', 'Plus one day')
  .parse(process.argv);

const minute = 60000;
const hour = minute * 60;
const day = hour * 24;

let plusOne;
if(program.minute) {
    plusOne = Date.now() + minute;
} else if (program.hour) {
    plusOne = Date.now() + hour;
} else if (program.day) {
    plusOne = Date.now() + day;
} else {
    log(c.redBright.bold('\n  Plus one, what? Read the manual:'));
    program.outputHelp(c.brightWhite);
    return;
}

log(c.yellow.bold(plusOne));
ncp.copy(plusOne)
