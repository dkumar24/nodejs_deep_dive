import express from 'express';
import dotenv from 'dotenv';

import homeRouter from './router/homeRouter.js';
import aboutRouter from './router/aboutRouter.js';
import contactRouter from './router/contactRouter.js';
import serviceRouter from './router/servicesrouter.js';

const app = express();
app.set("view engine","hbs");
app.set("views", "views");
dotenv.config();
const PORT = process.env.PORT_NUMBER
app.use(express.static('public'));
app.use(homeRouter,aboutRouter,contactRouter,serviceRouter);
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})

