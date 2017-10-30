const ora = require('ora');
 
const spinner = ora('Loading unicorns');

spinner.start(); 
setTimeout(() => {
    spinner.color = 'green';
    spinner.text = 'Loading rainbows';
    spinner.succeed();
}, 1000);	


setTimeout(() => {
    spinner.color = 'green';
    spinner.text = 'Loading rainbows';
    spinner.fail();
}, 3000);	


setTimeout(() => {
    spinner.color = 'green';
    spinner.text = 'Loading rainbows';
    spinner.warn();
}, 5000);	


setTimeout(() => {
    spinner.color = 'green';
    spinner.text = 'Loading rainbows';
    spinner.info();
}, 7000);	




/**


运行后看cmd命令行，查看效果




**/ 