// Assertions 

let value : unknown = "someValue"
// as
let exp = value as string
console.log(exp)


// Angle brackets
let exp2 = <string>value
console.log(exp2)

const data = JSON.parse('{"name": "Zeke"}') as { name: string };
console.log(data.name.toUpperCase()); 


