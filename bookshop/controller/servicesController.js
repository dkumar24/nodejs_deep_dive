import getPagePathByName from "../util/loadpage.js";
const servicesController = (req,res)=>{
    console.log(req);
    res.sendFile(getPagePathByName("services.html"));
}

export default servicesController;