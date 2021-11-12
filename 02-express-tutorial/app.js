const http = require('http');
const {
    readFileSync
} = require('fs')

// get all file
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer(function (request, response) {
    // console.log(request.method)
    const url = request.url;
    console.log(url)
    // home page
    if (url === '/') {
        response.writeHead(200, {
            'content-type': 'text/html'
        })
        response.write(homePage);
        response.end();
        //about page
    } else if (url === '/about') {
        response.writeHead(200, {
            'content-type': 'text/html'
        })
        response.write('<h3>About page</h3>');
        response.end()
    }
    // styles
    else if (url === '/styles.css') {
        response.writeHead(200, {
            'content-type': 'text/css'
        })
        response.write(homeStyles);
        response.end();
    }
    // image logo
    else if (url === '/logo.svg') {
        response.writeHead(200, {
            'content-type': 'image/svg+xml'
        })
        response.write(homeImage);
        response.end();
    }
    // logix
    else if (url === '/browser-app.js') {
        response.writeHead(200, {
            'content-type': 'text/javascript'
        })
        response.write(homeLogic);
        response.end();
    }
    // 404 Error
    else {
        response.writeHead(404, {
            'content-type': 'text/html'
        })
        response.write('<h3>404 Page not found</h3>');
        response.end();
    }

})

server.listen(5000)