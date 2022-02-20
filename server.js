const http = require('http'); // Module HTTP
const fs = require('fs/promises'); // Module FileServer
const path = require('path'); // Module PATH

const messages = require('./messages'); // file message.js


// Create server
http.createServer((req, res) => {

    const createPath = (page) => path.resolve(__dirname, 'www', 'pages', `${page}.html`);
    let basePath = '';


    // Routing
    switch(req.url) {
        case '/':
        case '/index':
        case '/index.html':
            basePath = createPath('about');
            res.setHeader("Content-Type", "text/html");
            res.statusCode = 200;
            break;
        case '/about':
            basePath = createPath('about');
            res.setHeader("Content-Type", "text/html");
            res.statusCode = 200;
            break;
        case '/board':
            basePath = createPath('board');
            res.setHeader("Content-Type", "text/html");
            res.statusCode = 200;
            break;
        case '/numbers':
            basePath = createPath('numbers');
            res.setHeader("Content-Type", "text/html");
            res.statusCode = 200;
            break;
        default:
            basePath = createPath('error');
            res.statusCode = 404;
            break;
    }
    fs.readFile(basePath)
    .then(contents => {     
        res.end(contents);
    });

}).listen(3000, () => console.log('Сервер работает'));

