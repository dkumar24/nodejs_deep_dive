const http = require("http");
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const url= req.url
    const method = req.method
    switch(url)
    {
        case "/":
            res.setHeader("Content-type",'text/html');
                res.write("<html>");
                res.write("<head>");
                res.write("<title>");
                res.write("First Html Page by Node js");
                res.write("</title>");
                res.write("</head>");
                res.write("<body>");
                res.write("<form action='/about' method='post'>")
                res.write("<input type='text' name='message' hint='Enter Your Message'/>");
                res.write("<button type='submit'>Send</button>");
                res.write("</form>");
                res.write("<body>");
                res.write("</html>")
            break;
        case "/about":
            if(method==="POST")
            {
                const body= [];
                req.on("data",(chunk)=>{
                    console.log("Chunk",chunk);
                    body.push(chunk);

                });
                req.on("end",()=>{
                    const resposne = Buffer.concat(body).toString();
                    const message = resposne.split("=")[1];
                    fs.writeFileSync("hello.txt",message);
                    console.log(resposne);

                });
                console.log(req);
               
                res.write("About"+method);
            }
          
            break;
        case "/contact":
            res.write("Contact Us")
            break;        
    }
    // if(url==="/")
    // {
    //     res.write("Home")
    // }
    // res.setHeader("Content-type",'text/html');
    // res.write("<html>");
    // res.write("<head>");
    // res.write("<title>");
    // res.write("First Html Page by Node js");
    // res.write("</title>");
    // res.write("</head>");
    // res.write("<body>");
    // res.write("<h1>")
    // res.write("Node is first response");
    // res.write("</h1>");
    // res.write("<body>");
    // res.write("</html>");
    res.end();


});
server.listen(3000);