// Special Types
//strictNullChecks
//void | any | unknown | never | null | undefined

// any

let someVal: any;
someVal = "str";
someVal = 20;
someVal = false;

// unknown

let input: unknown;
input = 20;
input = "Hello";

if (typeof input === "string") {
  console.log(`Data CheckDone --> ${input}`);
}

//never

function fail(msg: string): never {
  throw new Error(msg);
}

// void
// function doesn't return a useful value
function log(msg: string): void {
  console.log(msg);
}

//null and undefined
let nothingVal: string | null = null;
let notAssigned: undefined = undefined;
