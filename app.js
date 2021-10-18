const http = require('http');

const {readFileSync} = require('fs');

const homePage = readFileSync('./index.html');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url == '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    } else {
        res.end('page not found');
    }
})

server.listen(5000);
