import { readFile } from 'node:fs/promises';
import * as http from 'http';

const hostname = '127.0.0.1'
const port = 3000;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  try{
    const filePath = new URL('./index.html', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
    res.end(contents);
  } catch (err) {
    res.setHeader('Content-Type', 'text/plain');
    res.end("404 Error");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});