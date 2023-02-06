import Handlebars from "handlebars";



//HandleBars with Single Expression
const template = Handlebars.compile(
    "{{firstName}}"
)
console.log(template(({firstName:"Deepak"})));
//HandleBars with Double Expression
const template2 = Handlebars.compile(
    "{{firstName}}  {{lastName}}"
)
console.log(template2(({firstName:"Deepak",lastName:"Kumar"})));

//HandleBars with Nested Object

//Without With
const template3 = Handlebars.compile("{{person.firstName}}  {{person.lastName}}")

console.log(template3({person:{firstName:"Pardeep",lastName:"Kumar"}}))

const template4 = Handlebars.compile("{{#with person}}{{firstName}}  {{lastName}}{{/with}}")

console.log(template4({person:{firstName:"Navdeep",lastName:"Singh"}}))

//Each helper 
const template5 = Handlebars.compile("{{#each persons}}{{this.name}}{{/each}}")
console.log(template5({persons:[{name:"Deepak",age:35},{name:"Pardeep",age:39},{name:"Navdeep",age:34},{name:"Sundeep",age:35},{name:"Neetu",age:35}]}))


//Custom Helpers
Handlebars.registerHelper("printPerson",function(person){

    return `${person.name} ${person.age}`;
});

const template6 = Handlebars.compile("{{#each persons}}{{printPerson this}}{{/each}}")
console.log(template6({persons:[{name:"Deepak",age:35},{name:"Pardeep",age:39},{name:"Navdeep",age:34},{name:"Sundeep",age:35},{name:"Neetu",age:35}]}));

Handlebars.registerHelper("toUpperCase",function(value){
    return value.toUpperCase();
})

const template7 = Handlebars.compile("{{toUpperCase myName}}");
console.log(template7({myName:"Deepak"}));





   

