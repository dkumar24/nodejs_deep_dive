import getPagePathByName from "../util/loadpage.js";
const aboutController = (req,res)=>{
    const demo = {title:"About us",description:"This is about Page"}
    console.log(req);
    res.render("about",{demo:demo})
}

export default aboutController;