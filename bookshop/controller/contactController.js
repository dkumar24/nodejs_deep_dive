import getPagePathByName from "../util/loadpage.js";
const contactController = (req,res)=>{
    res.sendFile(getPagePathByName("contact.html"));
}

export default contactController;