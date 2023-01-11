import getPagePathByName from "../util/loadpage.js";
const homeController = (req,res)=>{
    console.log(req);
    res.sendFile(getPagePathByName("home.html"));
}

export default homeController;