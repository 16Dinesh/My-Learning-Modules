const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Secure World");
});

// default HTTPs port 443
server.listen(443, () => {
  console.log(`Secure server running at https://localhost/${443}`);
});