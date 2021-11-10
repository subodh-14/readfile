const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{

    if(req.url=='/'){
        res.end("this is the homepage");
    }
    if(req.url == '/api/readfiles'){
        fs.readFile("./example.txt",'utf8',(err,data)=>{
            
            res.end(data)
        })
    }
   
   
   
})



server.listen(3000,'127.0.0.1')
