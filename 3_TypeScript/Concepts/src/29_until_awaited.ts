// Promise<T> -> This async operation will eventually give me a value of type T.

function getNumber(): Promise<number> {
  return Promise.resolve(42);
}

//Promise<Promise<T>>

Promise<Promise<number>>;
const nested = Promise.resolve(Promise.resolve(10));

//Thenables (.then) -> Object with a .then() method — not necessarily a real Promise

const thenable = {
  then(resolve: (v: number) => void) {
    resolve(123);
  },
};
// await thenable;

// Awaited<T> -> final result type of an async value
type AB = Awaited<Promise<number>>;

//------------------

type Promise1 = Awaited<Promise<number>>; // number
type Promise2 = Awaited<Promise<Promise<string>>>;
type Awaited1 = Awaited<string>; // string

type PromiseUnionExample = Awaited<Promise<string | number>>;

async function fetchCount() {
  return 42 as const;
}

type ResolvedFetchCountValue = Awaited<ReturnType<typeof fetchCount>>;

async function getData() {
  return Promise.all([
    Promise.resolve(1 as const),
    Promise.resolve("x" as const),
  ] as const);
}

type DataTupleWithPromise = Awaited<ReturnType<typeof getData>>; // [1, "x"] readonly
