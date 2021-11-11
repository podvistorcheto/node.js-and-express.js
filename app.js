const http = require('http');
const server = http.createServer(function(request, response){
    // console.log(request)
    if(request.url === '/') {
        response.end('Welcome to our home page')
    }
    else if(request.url === '/about'){
        response.end('Here is the about page')
    }
    // response.write('Welcome to our home page')
    else{
    response.end(`<h1>Ooops!</h1><p>We can seem to find the page you are looking for</p><a href="/">back to home page</a>`)
    }
})
server.listen(5000)