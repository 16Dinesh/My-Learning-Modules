// Build-in(Primitive Types) Types

// string
// number
// boolean
// null
// undefined
// any
// unKnown
// void
// never

let userName: string = "Dinesh";
let age: number = 20;
let isActive: boolean = true;
let notSet: null = null;
let notDefined: undefined = undefined;
let anything: any = "Can be anything";
let unknownValue: unknown = "Might be anything";
let nothing: void = undefined; // for functions returning nothing
let neverType: never; // for unreachable code or throwing functions

// Ts knows the JS Language

// --------------------------------------

//Type Inference

let ageNumber = 20; // Ts Smart enough to know this is Type is Number
let ageMax: number = 202; //  or we Manually Give Type // explicit typing (redundant but allowed)
console.log(ageMax);

// ---------------------------

// custom (user - defined) types

let person: { name: string; age: number } = {
  age: 20,
  name: "dinesh",
};

//--------------------

// Inference
// Super-Usable fo the reusable structure

interface User {
  name: string;
  id: number;
  email?: string; // optional property
}

const user: User = {
  name: "Dinesh",
  id: 2,
};

console.log(user);

type UserType = {
  name: string;
  id: number;
  email?: string;
};

// --------------------

// type Aliases

type maybe = string | number;

let some: maybe = "someString";
let someNum: maybe = 2002;

type Value = {
  a: number;
  b: number;
};

//--------------------

// function types

// function sum(a : number, b : number) : number {
//     return a + b
// }

// console.log(sum(2,3))

function sum(value: Value): number {
  return value.a + value.b;
}

const result = sum({ a: 10, b: 20 });
console.log(result);

//---------------------------------------

// Array and Tuple Types

// Array

let arr: number[] = [1, 23.4, 5, 3, 4, 5];
let str: string[] = ["any", "String"];

// Tuple

let both: [string, number] = ["string", 21];

//-----------------------

//union & intersection types

// union

type id = string | number 

let val :id = 25
let val_of :id = "25"

// intersection

type Admin = {admin : boolean}
type UserName = {user : string}

type AdminUser = Admin & UserName

const output : AdminUser = {
  admin : true,
  user : "Name of the User"
}



