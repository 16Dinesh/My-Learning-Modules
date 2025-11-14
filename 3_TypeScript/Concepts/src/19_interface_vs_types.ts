// Interface VS types
// Interface
interface UserInterface {
  name: string;
  age: number;
}

interface UserInterface {
  id?: number;
  name: string;
  age: number;
}

//cant redeclare type alias name

// Type alias
type UserTypes = {
  name: string;
  age: number;
};

const u1: UserInterface = { name: "Zeke", age: 25 };
const u2: UserTypes = { name: "Alex", age: 22 };
