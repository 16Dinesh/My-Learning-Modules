// <T> --> The PlaceHolder
function id<T>(x: T): T {
  return x;
}

function firstGen<T>(arr: T[]): T | undefined {
  return arr[1];
}

console.log(firstGen([1, 2, 3, 4]));

// without generics -> (x: unknown)=> unknown
// with generics: (x: T)=> T // keep the exact type

function wrap<T>(value: T): { value: T } {
  return { value };
}
