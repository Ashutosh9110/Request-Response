const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    fs.readFile("formValues.txt", "utf8", (err, data) => {
      const message = data || "";

      res.setHeader("Content-Type", "text/html");
      res.end(`
        <p>${message}</p>
        <form action="/message" method="POST">
          <label>Name: </label>
          <input type="text" name="username"></input>
          <button type="submit">Add</button>
        </form>
      `);
    });
  } else if (url === "/message" && method === "POST") {
    let body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const buffer = Buffer.concat(body);
      const formData = buffer.toString();
      const message = formData.split("=")[1];

      // Optional: decode URL-encoded data like spaces and special characters
      const decodedMessage = decodeURIComponent(message);

      fs.writeFile("formValues.txt", decodedMessage, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      });
    });
  }
});

server.listen(port, () => {
  console.log("Server is running on port " + port);
});
