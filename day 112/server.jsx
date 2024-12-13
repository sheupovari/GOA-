// making server in Jsx(react)
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Us</h1><p>Welcome to the About page!</p>");
  } else if (req.url === "/homepage") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <h1>Homepage</h1>
      <p>Welcome to our homepage!</p>
      <a href="/about">Go to About</a><br>
      <a href="/contact">Go to Contact</a>
    `);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Contact Us</h1><p>Get in touch!</p>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});



