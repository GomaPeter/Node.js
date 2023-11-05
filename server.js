// This line import the Node.js built-in the "http" module
const http = require('http');

// Here we create an instance of an HTTP server by calling 'http.createServer'
// (req, res) are the parameter 'req' represent the incoming request while 'res' represent the response that is sent back to the client
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello Node!!!!</h1>\n');
});


// This instruct the server to listen on port 3000 for the incoming HTTP request
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
