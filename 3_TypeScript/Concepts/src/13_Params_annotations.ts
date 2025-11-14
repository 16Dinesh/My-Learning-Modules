// Params Annotations

function greeting(name: string) {
  console.log(`Hello, ${name}!`);
}

type Point = { x: number; y: number };

function distanceFromOrigin(p: Point): number {
  return Math.hypot(p.x, p.y);
}

function describePerson(name: string, age: number, active: boolean) {
  console.log(`${name} is ${age} years old and active: ${active}`);
}

function greetFun(name: string, message: string = "Hello") {
  console.log(`${message}, ${name}`);
}

greeting("Zeke");
console.log(distanceFromOrigin({ x: 3, y: 2 }))
describePerson("Zeke", 25, true);
greetFun("Zeke");
greetFun("Zeke", "Welcome");
