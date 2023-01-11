import getPagePathByName from "../util/loadpage.js";
const contactController = (req,res)=>{
    console.log(req);
    res.render("contact")
}

export default contactController;