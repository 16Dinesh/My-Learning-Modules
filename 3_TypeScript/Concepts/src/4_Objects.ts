// Objects

let personObj = {
  name: "name", // taken as String
  age: 20, // taken as number
};

// Object type 

type UserObj = {
  id: number; //required
  name: string;
  email?: string; //optional (could be absent)
  readonly createdAt: Date; //can not be reassigned
};

let someObj: UserObj = {
  id: 2,
  name: "john",
  createdAt: new Date(),
  email: "email",
};

// index Signature

let userScores: {
  name: string;
  [key: string]: string | number;
};

userScores = {
  name: "Zeke",
  math: 90,
  science: 88,
};


// Record

type Scores = Record<string, number>;

const scores: Scores = {
  Zeke: 100,
  Ava: 95,
};

type Count = { [k: string]: number };
type Count1 = Record<"likes" | "views" | "shares" | "random", number>;

const c1: Count = { whatever: 1 };
const c2: Count1 = { likes: 1, views: 2, shares: 3, random: 5 };