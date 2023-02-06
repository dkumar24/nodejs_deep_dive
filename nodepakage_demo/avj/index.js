import Ajv from 'ajv';
const avj = new Ajv();

const schema = {
    type:"object",
    properties:{
        foo:{type:"integer"},
        bar:{type:"string"},
    },
    required:["foo"],
    additionalProperties:false,
}
const data = {
    foo:19,
    bar:"abc",
}

const validate = avj.compile(schema);
const valid = validate(data);
console.log(valid);
if(!valid) console.log(validate.errors)