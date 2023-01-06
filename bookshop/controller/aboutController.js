import getPagePathByName from "../util/loadpage.js";
const aboutController = (req,res)=>{
    res.sendFile(getPagePathByName("about.html"));
}

export default aboutController;