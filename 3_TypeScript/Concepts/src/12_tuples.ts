// Tuples -> Like Array But with Fixed Length & Specific Types for each position.

let personTup: [string, number];
personTup = ["Zeke", 25];
// personTup = [25,"Zeke"]; // Gives and Error

let rgb: [number, number, number] = [255, 128, 64];

type ResponseRow = [status: number, message?: string];

const r11: ResponseRow = [200];

