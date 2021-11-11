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

/*
const http = require('http')

const server = http.createServer((reques, response) => {
  //   if (request.url === '/') {
  //     response.end('Welcome to our home page')
  //   }
  //   if (request.url === '/about') {
  //     response.end('Here is our short history')
  //   }
  //   response.end(`
  //   <h1>Oops!</h1>
  // <p>We can't seem to find the page you are looking for</p>
  // <a href="/">back home</a>
  //   `)
  // ###################################
  // ###################################
  //
  //  IT MAY SHOW ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
  if (request.url === '/') {
    response.end('Welcome to our home page')
  } else if (req.url === '/about') {
    response.end('Here is our short history')
  } else {
    response.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(5000)

*/