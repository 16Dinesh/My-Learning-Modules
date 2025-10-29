const http = require("http");

const server = http.createServer((req, res) => {
  console.log("req", req);
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello nods JS from the http module");
});

server.listen(3000, () => {
  console.log(`server is in ${3000}`);
});
