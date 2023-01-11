import getPagePathByName from "../util/loadpage.js";
const homeController = (req,res)=>{
    console.log(req);
    res.render("home")
}

export default homeController;