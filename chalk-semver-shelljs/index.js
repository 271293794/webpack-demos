
const chalk = require('chalk')

/**
   chalk 的使用方法
**/

//  chalk 方法一
console.log(chalk.blue("以下是 chalk插件的使用方法:"))
console.log(chalk.red("I change RED")); 
console.log(chalk.cyan("I change RED")); 
console.log(chalk.yellow("I change RED")); 

// chalk 方法一
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
console.log(error('Error!'));
console.log(warning('Warning!'));



/**
   chalk 的使用方法 做版本判断时很有用
**/
const semver = require('semver')

console.log(chalk.blue("以下是 semver插件的使用方法:"))

console.log(semver.valid('1.2.3')) // '1.2.3'
console.log(semver.valid('a.b.c')) // null
console.log(semver.clean('=v1.2.3')) // '1.2.3'

console.log(semver.satisfies('3.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3')) // true
console.log(semver.gt('1.2.3', '9.8.7'))// false
console.log(semver.lt('1.2.3', '9.8.7')) // true


/**
   shelljs 的使用方法(实例)

**/

const shell = require('shelljs')

console.log(chalk.blue("以下是 shelljs插件的使用方法:"))
shell.echo('Sorry, this script requires git') // 打印数据
shell.echo(shell.which('npm'))

shell.cd("sel");
shell.mkdir('-p','newFile')