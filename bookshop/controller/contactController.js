import getPagePathByName from "../util/loadpage.js";
const contactController = (req,res)=>{
    console.log(req);
    const demo = {title:"Contact us",description:"This is about Page"}
    res.render("contact",{demo:demo})
}

export default contactController;