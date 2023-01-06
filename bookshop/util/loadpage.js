import path from 'path';

 const getPagePathByName=(pageName)=>{
   return path.join(process.cwd(),"./views",pageName);
 }   

 export default getPagePathByName;
