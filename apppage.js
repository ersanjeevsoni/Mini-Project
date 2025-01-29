// using seperate html file and read file using promises
const http = require("http");
 const fsPromise=require("fs/promises"); // require only in case of async file reading
//const fsPromise=require("node:fs"); // require only in case of sync file reading no promises mean no async await

const server=http.createServer(async(req,res)=>{

    if(req.url=="/"){
          const data=await fsPromise.readFile("./homepage.html");
          res.end(data);
    }
    else if(req.url=="/about"){
        const aboutdata=await fsPromise.readFile("./aboutpage.html")
        res.end(aboutdata);
    }
    else{
        const errordata=await fsPromise.readFile("./error403.html");
        res.end(errordata)
    }

});

server.listen(1900);
