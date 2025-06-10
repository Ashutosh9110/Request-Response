const http = require("http");
const routes = require("./routes")
const port = 3000;

routes.testFunction()
const server = http.createServer(routes.hander);

// routes.anotherFunction()

server.listen(port, () => {
  console.log("Server is running on port " + port);
});
