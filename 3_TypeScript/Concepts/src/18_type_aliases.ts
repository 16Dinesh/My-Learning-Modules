// object shapes -> similar to interfaces
// union types (A | B)
// intersection types (A & B)

type User101 = {
  name: string;
  age: number;
};

const userValue: User101 = { name: "Zeke", age: 25 };

type Person1 = {
  id: string;
  address: string;
  salary: number;
};

const person1: Person1 = {
  id: "1",
  address: "address",
  salary: 1234,
};

type Status = "new" | "paid" | "pending" | unknown;

function nextActionCheck(s: Status): string {
  switch (s) {
    case "new":
      return "new User";
    case "paid":
      return "paid User";
    case "pending":
      return "pending User";

    default:
      return "default User";
  }
}

console.log(nextActionCheck("new"))
console.log(nextActionCheck("paid"))
console.log(nextActionCheck("pending"))
console.log(nextActionCheck("SomeThing"))

type ToMerge1 = { price: number };
type ToMerge2 = { stock: number };

type MergedProductInfo = Person1 & ToMerge1 & ToMerge2;
