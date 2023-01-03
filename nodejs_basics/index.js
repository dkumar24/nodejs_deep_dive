const http = require("http");

const server = http.createServer((req,res)=>{
    const url= req.url
    switch(url)
    {
        case "/":
            res.write("Hello");
            break;
        case "/about":
            res.write("About");
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