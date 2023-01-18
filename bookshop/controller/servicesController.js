import getPagePathByName from "../util/loadpage.js";
const servicesController = (req,res)=>{
    console.log(req);
    const demo = {title:"Services",description:"This is services Page",products:[{name:"Deepak",price:10},{name:"Deepika",price:50},{name:"Aayu Bajaj",price:90}]}
    res.render("services",{demo:demo});
}

export default servicesController;