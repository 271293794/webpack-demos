const chalk = require('chalk')
const semver = require('semver')
const shell = require('shelljs')
const child_process = require('child_process');

shell.exec('npm --version')
shell.exec('node -v')

// console.log(child_process.execSync('npm --version').toString().trim())

let npmV = semver.valid(child_process.execSync('npm --version').toString().trim())
let nodeV = semver.valid(child_process.execSync('node -v').toString().trim())

console.log(chalk.yellow("当前 npm版本："+ npmV))
console.log(chalk.yellow("当前 node版本："+ nodeV  ))