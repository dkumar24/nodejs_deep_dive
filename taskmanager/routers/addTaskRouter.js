import { Router } from "express";
import  { addTaskController,removeController, updateController } from "../controllers/addTaskController.js";
const addTaskRouter = Router();
addTaskRouter.post("/addTask",addTaskController);
addTaskRouter.post("/updateTask/:name",updateController);
addTaskRouter.post("/deleteTask/:name",removeController);
export default addTaskRouter;