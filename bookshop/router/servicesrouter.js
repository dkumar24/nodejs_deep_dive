import {Router} from 'express';
import servicesController from '../controller/servicesController.js';

const serviceRouter = Router();
serviceRouter.get("/services",servicesController)
export default serviceRouter;
