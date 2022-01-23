//Simple Node js server using Express
const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req,res)=>{
    res.send('Hello World!');
})

app.listen(port,()=>{
    console.log('Server is listening on port 5000...')
})

//Simple Node js server
//var http = require('http');
//var server = http.createServer(function(req,res){
    //if((req.url == '/')){
        //res.writeHead(200, {'Content-type':'text/html'});
        //res.write('<html><body><p><strong>Hello World </strong></p></body></html>')
    //}
//})

//server.listen(5000);
//console.log('Server is listening at port 5000');

//Simple hello world using Node
var msg ='Hello World';
console.log(msg);