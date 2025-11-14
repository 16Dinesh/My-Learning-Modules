interface UserDetails {
  readonly id: number;
  name: string;
  email: string;
  isAdmin?: boolean;
}

const users: UserDetails[] = [
  { id: 1, name: "Zeke", email: "zeke@example.com", isAdmin: true },
  { id: 2, name: "Alex", email: "alex@gmail.com" },
  { id: 3, name: "Sam", email: "sam@mail.com", isAdmin: false },
];

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Usage examples:
// getProp(users[0], "name");  // string
// getProp(users[1], "id");    // number
// getProp(users[2], "isAdmin"); // boolean | undefine

type PartialUser = Partial<User>;

// Example: Create a user preview (only name + email)
type UserPreview = Pick<User, "name" | "email">;

// Test values:
const incompleteUser: PartialUser = { email: "temp@test.com" };

const preview: UserPreview = {
  name: "TestUser",
  email: "preview@example.com",
};

function printUser(user: UserDetails | null) {
  if (!user) {
    console.log("User not found.");
    return;
  }

  // Inside this block, user is narrowed to User
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Admin: ${user.isAdmin ? "Yes" : "No"}`);
}

// console.log("--- Testing getProp ---");
// console.log(getProp(users[0], "name"));
// console.log(getProp(users[1], "email"));
// console.log(getProp(users[2], "isAdmin"));

// console.log("\n--- Testing narrowing function ---");
// printUser(users[0]); // valid user
// printUser(null); // tests narrowing

console.log("\n--- Utility type outputs ---");
console.log(incompleteUser);
console.log(preview);
