import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
    console.log(req)
    res.end("Request received...");
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
