// (T extends X >
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

logLength([2, 3, 4]);
logLength("Hello User");
// logLength(123)

function combine<T extends string | number>(a: T, b: T) {
  return `${a}${b}`;
}

console.log(combine(1, 2));
console.log(combine("chai", "Tea"));

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const userDet = { name: "Zeke", age: 25 };

getProperty(userDet, "name");
getProperty(userDet, "age");
// getProperty(userDet, "email");

type UserN6 = { id: string; name: string; age?: number };

function userN6Extract<T, K extends keyof T>(
  arrN4: T[],
  keyN4: K
): Array<T[K]> {
  return arrN4.map((item) => item[keyN4]);
}

const usersN6: UserN6[] = [
  {
    id: "1",
    name: "name1",
    age: 22,
  },
  {
    id: "2",
    name: "name2",
  },
];

console.log(userN6Extract(usersN6, "id"));
console.log(userN6Extract(usersN6, "name"));
