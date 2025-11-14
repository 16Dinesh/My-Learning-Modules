// value must be everything from A and from B --> (&)

type A = { name: string };
type B = { age: number };

type Person = A & B;

let persons: Person = {
  name: "Dinesh",
  age: 22,
};

console.log(persons);

type Timestamps = { createdAt: Date; updatedAt: Date };
type Identifiable = { id: string };
type UserData = { name: string; email: string };

type UserInter = Timestamps & Identifiable & UserData;

const userIn: UserInter = {
  id: "u101",
  name: "Zeke",
  email: "zeke@example.com",
  createdAt: new Date(),
  updatedAt: new Date()
};