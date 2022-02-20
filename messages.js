const fs = require('fs/promises');

console.log("This is message.js");

function boardMessage(res) {
    fs.readFile(__dirname + '/www/pages/board.html', 'utf-8')
}