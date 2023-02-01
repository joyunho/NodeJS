


/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === './index.html') {
    request.pipe(response);
  } else {
    response.statusCode = 200;
    response.end();
  }
}).listen(8080);


const server = http.createServer((req, res) => {
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});


const server = http.createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();

        response.on('error', (err) => {
            console.error(err);
        });

        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');

        const responseBody = { headers, method, url, body };

        response.write(JSON.stringify(responseBody));
        response.end();
    });
}).listen(8080);


server.listen(port, hostname, () => {
    console.log(' http:// ${hostname} : ${port} / ');
});
*/

/**
 * 웹 서버에 html 파일 서비스 하기
 */
 
 /*
var http = require('http');
var fs = require('fs'); // 파일 읽기, 쓰기 등 을 할 수 있는 모듈
 
// 404 error message : 페이지 오류가 발생했을때,
function send404Message(response){
    response.writeHead(404,{"Content-Type":"text/plain"}); // 단순한 글자 출력
    response.write("404 ERROR... ");
    response.end();
}
 
// 200 Okay : 정상적인 요청
function onRequest(request, response){
 
    if(request.method == 'GET' && request.url == '/'){
        response.writeHead(200,{"Content-Type":"text/html"}); // 웹페이지 출력
        fs.createReadStream("./index.html").pipe(response); // 같은 디렉토리에 있는 index.html를 response 함
 
    } else {
        // file이 존재 하지않을때,
        send404Message(response);
 
    }
 
}
 
http.createServer(onRequest).listen(8888);
*/

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

