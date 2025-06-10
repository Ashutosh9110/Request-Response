const http = require("http")
const port = 3000;

const server = http.createServer((req, res) => {
    
  res.writeHead(200, {"Content-Type" : "text/html"})
    
  let message = ""
  switch (req.url) {
    case "/home":
      message = "<h1>Welcome Home</h1>"
      break
    case "/about":
      message = "<h1>Welcome to About Us</h1>"
      break
    case "/node":
      message = "<h1>Welcome to my Node Js project</h1>"
      break
    default:
      message = "<h1>Page not found</h1>"
      break
  }


res.end(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>Node Response</title>
    </head>
    <body>
      ${message}
    </body>
  </html>
`);
});


server.listen(port, () => {
  console.log("server is running");
})




