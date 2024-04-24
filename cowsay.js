const cowsay = require('cowsay');
console.log(cowsay.say({ text: 'ウシだよ！' }));

module.exports = cowsay; // 外部に公開する
