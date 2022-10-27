const http = require("http");
const fs = require("fs");
const path = require("path");


const PORT = 4000;

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    fs.readFile(path.join(__dirname, "pages", "home.html"), (err, data) => {
      if (err) throw new Error(err);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about.html" && req.method === "GET") {
    fs.readFile(path.join(__dirname, "pages", "about.html"), (err, data) => {
      if (err) throw new Error(err);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  
  }
  else if (req.url === "/contact.html" && req.method === "GET") {
    fs.readFile(path.join(__dirname, "pages", "contact.html"), (err, data) => {
      if (err) throw new Error(err);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  
  }else if(req.url.match("\.jpg$")){
    var imagePath = path.join(__dirname, 'pages', req.url);
    var fileStream = fs.createReadStream(imagePath);
    res.writeHead(200, {"Content-Type": "image/jpg"});
    fileStream.pipe(res);
}
  
  
  
  else {
    fs.readFile(path.join(__dirname, "pages", "home.html"), (err, data) => {
      if (err) throw new Error(err);
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
