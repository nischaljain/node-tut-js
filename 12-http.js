const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("here is an about page about our website");
  } else {
    res.end("ENDING");
  }
});

server.listen(4000);
