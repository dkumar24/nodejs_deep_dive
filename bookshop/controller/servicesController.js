import getPagePathByName from "../util/loadpage.js";
const servicesController = (req,res)=>{
    console.log(req);
    res.render("services")
}

export default servicesController;