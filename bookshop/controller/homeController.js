import getPagePathByName from "../util/loadpage.js";
const homeController = (req,res)=>{
    console.log(req);
    const demo = {title:"Home",description:"This is Home Page"}
    res.render("home",{demo:demo});
}

export default homeController;