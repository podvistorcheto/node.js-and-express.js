const http = require('http');

const server = http.createServer(function(request, response){
    // console.log(request.method)
    const url = request.url;
    // home page
    if (url === '/') {
        response.writeHead(200, {'content-type': 'text/html'})
        response.write('<h3>Home page</h3>');
        response.end();
        //about page
    } else if(url === '/about') {
        response.writeHead(200, {'content-type': 'text/html'})
        response.write('<h3>About page</h3>');
        response.end();
        // 404 Error
    } else {
        response.writeHead(404, {'content-type': 'text/html'})
        response.write('<h3>404 Page not found</h3>');
        response.end();
    }
  
})

server.listen(5000)