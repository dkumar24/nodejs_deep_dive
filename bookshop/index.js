import express from 'express';
import dotenv from 'dotenv';

import homeRouter from './router/homeRouter.js';
import aboutRouter from './router/aboutRouter.js';
import contactRouter from './router/contactRouter.js';
import serviceRouter from './router/servicesrouter.js';

const app = express();

dotenv.config();
app.use(homeRouter,aboutRouter,contactRouter,serviceRouter);
app.listen(4000,()=>{
    console.log(`http://localhost:${4000}`);
})

