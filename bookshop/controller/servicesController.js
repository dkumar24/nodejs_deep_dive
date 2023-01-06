import getPagePathByName from "../util/loadpage.js";
const servicesController = (req,res)=>{
    res.sendFile(getPagePathByName("services.html"));
}

export default servicesController;