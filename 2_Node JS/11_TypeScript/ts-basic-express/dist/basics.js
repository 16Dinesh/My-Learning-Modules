"use strict";
// Basic Types
// Boolean
let someBoolean = false;
// Number
let someNumber = 200;
// Sting
let someString = "Hello String";
// ArrayNumber
let someList = [1, 2, 3, 4, 5, 6];
//Array
let someProduct = [
    "Products 1",
    "Products 2",
    "Products 3",
    "Products 4",
    "Products 5",
];
let someProducts = [
    "Products 1",
    "Products 2",
    "Products 3",
    "Products 4",
    "Products 5",
];
//anyType
let randValue = 2;
//null & Undefined
let someNul = null;
let someUndefined = undefined;
//enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let rgb = Color.Green;
//truple
let abc = ["Name", 21];
const user = {
    name: "Dinesh",
    id: 1,
    email: "dr@dr.com",
};
const product1 = {
    title: "Product 1",
    price: 200,
};
//------------------------------------------------
//functions with type annotations
function multiply(a, b) {
    return a * b;
}
//arrow function
const add = (num1, num2) => {
    return num1 + num2;
};
function greet(name, greeting) {
    return `${name} ${greeting}`;
}
function some(a) {
    console.log(a);
}
