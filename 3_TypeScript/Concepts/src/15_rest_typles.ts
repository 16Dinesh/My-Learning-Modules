type ScoresREST = [string, ...number[]];
const player1: ScoresREST = ["Zeke", 95, 88, 76];
const player2: ScoresREST = ["Maya"]; 

function logInfo(...args: [string, number, boolean]) {
  console.log(args);
}

const dataREST: [string, number, boolean] = ["Zeke", 25, true];
logInfo(...dataREST);

function sumAllNumbers(...xs: number[]): number {
  return xs.reduce((s, n) => s + n, 0);
}

console.log(sumAllNumbers(1, 2, 3, 4));

//Tuple rest

function makeRange(
  ...args: [start: number, end: number, step?: number]
): number[] {
  const [start, end, step = 1] = args;
  const out: number[] = [];

  for (let n = start; n <= end; n += step) out.push(n);
  return out;
}

console.log(makeRange(1, 5));
console.log(makeRange(2, 10, 2));
console.log(makeRange(1, 5, 2));

function draw(x: number, y: number) {
  console.log(x, y);
}

const points = [10, 20];
// draw(...points) // not a fixed [number, number] tuple

const pointsFixed = [10, 20] as const; //readonly
draw(...pointsFixed);
