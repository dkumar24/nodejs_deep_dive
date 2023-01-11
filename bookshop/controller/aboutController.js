import getPagePathByName from "../util/loadpage.js";
const aboutController = (req,res)=>{
    console.log(req);
    res.render("about")
}

export default aboutController;