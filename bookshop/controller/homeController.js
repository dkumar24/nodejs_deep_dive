import getPagePathByName from "../util/loadpage.js";
const homeController = (req,res)=>{
    res.sendFile(getPagePathByName("home.html"));
}

export default homeController;