// Basic Types

// Boolean
let someBoolean: Boolean = false;

// Number
let someNumber: number = 200;

// Sting
let someString: string = "Hello String";

// ArrayNumber
let someList: number[] = [1, 2, 3, 4, 5, 6];

//Array

let someProduct: string[] = [
  "Products 1",
  "Products 2",
  "Products 3",
  "Products 4",
  "Products 5",
];

let someProducts: Array<string> = [
  "Products 1",
  "Products 2",
  "Products 3",
  "Products 4",
  "Products 5",
];

//anyType
let randValue: any = 2;

//null & Undefined
let someNul: null = null;

let someUndefined: undefined = undefined;

//enum
enum Color {
  red,
  Green,
  Blue,
}

let rgb: Color = Color.Green;

//truple

let abc: [string, number] = ["Name", 21];

//--------------------------------------------------

//Interface

interface User {
  name: String;
  id: number;
  email?: string; //OP
}

const user: User = {
  name : "Dinesh",
  id : 1,
  email : "dr@dr.com",
};


// type

type Product = {
  title: string;
  price: number;
};

const product1: Product = {
  title: "Product 1",
  price: 200,
};

//------------------------------------------------

//functions with type annotations

function multiply(a: number, b: number): number {
  return a * b;
}

//arrow function
const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

function greet(name: string, greeting?: string): string {
  return `${name} ${greeting}`;
}

function some(a:number): void {
    console.log(a)
}
