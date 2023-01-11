import getPagePathByName from "../util/loadpage.js";
const aboutController = (req,res)=>{
    console.log(req);
    res.sendFile(getPagePathByName("about.html"));
}

export default aboutController;