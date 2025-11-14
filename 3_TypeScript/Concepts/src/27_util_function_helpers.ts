// ReturnType<T> -> Extracts the return type of a function

function getUser() {
  return { id: 1, name: "Zeke" };
}

type UserN12 = ReturnType<typeof getUser>;

// Parameters<T> -> Extracts the parameter types of a function as a tuple

function greet(name: string, age: number) {}

type Params = Parameters<typeof greet>;
const args: Params = ["Zeke", 25];

// ConstructorParameters<T> and InstanceType<T> -> To work with Classes

class Car {
  constructor(public make: string, public year: number) {}
}

type CarParams = ConstructorParameters<typeof Car>; // [string, number]
type CarInstance = InstanceType<typeof Car>; // Car

function ExtractUserInfo(id: string, isExtraInfo = false) {
  return {
    id,
    name: "Dinesh",
    log: isExtraInfo ? "details" : (undefined as string | undefined),
  };
}

type GetUserReturnInfo = ReturnType<typeof ExtractUserInfo>;
type GetUserParamsInfo = Parameters<typeof ExtractUserInfo>;

const argsInfo: GetUserParamsInfo = ["u1", true];
const resultInfo: GetUserReturnInfo = ExtractUserInfo(...argsInfo);

class PersonN1 {
  constructor(public name: string, public age: number) {}

  greet() {
    return `Hi I am this -> ${this.name}`;
  }
}

type PersonInstanceN1 = InstanceType<typeof PersonN1>;
type PersonCtorArgsN1 = ConstructorParameters<typeof PersonN1>;

const resultInfo1: PersonCtorArgsN1 = ["Dinesh", 29];
const abc: PersonInstanceN1 = new PersonN1(...resultInfo1);

console.log(abc.greet());
