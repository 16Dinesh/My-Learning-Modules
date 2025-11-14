//  Inference

let string = "String";
let number = 20;
let boolean = true;

function add(a: number, b: number) {
  return a + b;
}

console.log(add(12, 3));

let details = {
  name: "string",
  age: 20,
};

let source = [1, 23, 4.4, 5];

//only annotate when the type is not obvious

let maybe: string | number;
maybe = Math.random() > 0.5 ? "test" : 10;
