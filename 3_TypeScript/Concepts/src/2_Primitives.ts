// Primitives -> are most basic Types
// These are the Foundation of all TS Types

// string
let nameStr: string = "String";

//number
let randNum: number = 0;

//boolean
let randBol: boolean = false;

//bigInt

let randBigInt: bigint = 2n ** 63n - 1n;
//bigint and number cannot be mixed
// const mixed = randBigInt + randNum

//Symbol
const id1 : unique symbol  = Symbol("id"); 
const id2 : unique symbol = Symbol("id");
// console.log(id1 === id2)  //always false
// console.log(id1 !== id2)

const secretBadge: unique symbol = Symbol("secret");

const userDetails: { name: string } & { [secretBadge]?: string } = {
  name: "Dinesh",
};

userDetails[secretBadge] = "hidden";

console.log(userDetails[secretBadge]);

const TOKEN: unique symbol = Symbol("TOKEN");


