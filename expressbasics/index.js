const express = require('express');
const dotenv= require('dotenv');
dotenv.config();
const app = express();
const PORT_NUMBER = process.env.PORT_NUMBER;



app.use((req,res,next)=>{
console.log('Middle Ware 1');
next();
})
app.use((req,res)=>{
    res.send('First Page Using Express');
})
app.listen(PORT_NUMBER,()=>{
    console.log(`http://localhost:${PORT_NUMBER}`)
})



