import {Router} from 'express';
import aboutController from '../controller/aboutController.js';

const aboutRouter = Router();

aboutRouter.get("/about",aboutController)
export default aboutRouter;
