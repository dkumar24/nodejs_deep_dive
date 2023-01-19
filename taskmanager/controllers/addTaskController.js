import { addTask, removeTask } from "../model/appdata.js";
const addTaskController = (req,res)=>{
    console.log(req.body.title);
    addTask(req.body.title);
    res.redirect("/")
}
const removeController = (req,res)=>{
    console.log("Remove",req.params.name);
    removeTask(req.params.name);
     res.redirect("/");
  
}
const updateController = (req,res)=>{
    res.send("Update Page")
}
export {addTaskController,removeController,updateController};