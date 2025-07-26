//hello-server.js
const http = require("http");
const myName = "Rafid";

const server = http.createServer((req, res) => {
  //set response headers
  res.writeHead(200, { "content-type": "text/plain" });

  //Send response
  res.end(`Hello I'm ${myName}`);
});

const PORT = 1023;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log("Press Ctrl + C to stop the server");
});
