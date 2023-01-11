import getPagePathByName from "../util/loadpage.js";
const contactController = (req,res)=>{
    console.log(req);
    res.sendFile(getPagePathByName("contact.html"));
}

export default contactController;