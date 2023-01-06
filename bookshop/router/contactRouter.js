import {Router} from 'express';
import contactController from '../controller/contactController.js';

const contactRouter = Router();

contactRouter.get("/contact",contactController)
export default contactRouter;
