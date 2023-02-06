import Handlebars from "handlebars";


Handlebars.registerHelper("convert",function(e){
    let newArray=[];
    e.forEach(element => {
        let newObject = {name:element.name}
        newArray.push(newObject);
    });
    return newArray;
})



let people = [{
    name:"valve",
    val:"val10"
    },
    {
        name:"valve",
        val:"val10"
    },
    {
        name:"hind",
        val:"val10"
    },
    {
         name:"test",
         val:"val10"
    }];

const template = Handlebars.compile("{{firstName}}{{#each firstName}}{{name:this.name}}{{/each}}");



const value =template({firstName:people,lastName:"Kumar"});
console.log(value);

   

