let direction: "up" | "down" | "left" | "right";
type direction = "up" | "down" | "left" | "right";

// direction = "up";
// direction = "forward";

let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;
diceRoll = 4;

function move(d: direction) {
  console.log(d);
}

const d1 = "left"
move(d1)

let d2 = "left" 
// move(d2) // it gives Error Cuz let take the type of the value <String>

let d3 : direction = "right"
move(d3)


type Role = "admin" | "user" | "guest";

function login(role: Role) {
  if (role === "admin") {
    console.log("Welcome, admin!");
  } else if (role === "user") {
    console.log("Welcome back, user!");
  } else {
    console.log("Hello, guest!");
  }
}

login("admin"); 
// login("moderator"); 
