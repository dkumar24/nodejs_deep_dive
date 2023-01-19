import { getAllTasks } from "../model/appdata.js";
const homeController = (req,res)=>{
    res.render('home',{data:getAllTasks()});

}
export default  homeController;