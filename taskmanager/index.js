import express from 'express';
import dotenv from 'dotenv';
import homeRouter from './routers/homeRouter.js';
import addTaskRouter from './routers/addTaskRouter.js';
import bodyParser from 'body-parser';


const app = express();
dotenv.config();
const PORT = process.env.PORT
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(homeRouter,addTaskRouter)

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})
