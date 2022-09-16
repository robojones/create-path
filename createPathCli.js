#!/usr/bin/env node

require('node:child_process').exec(`npx mkdirp ${process.argv.slice(2).join()}`, {stdio: "inhire"},
    (error, _stdout, _stderr) => (error) && console.error(`exec error: ${error}`));
