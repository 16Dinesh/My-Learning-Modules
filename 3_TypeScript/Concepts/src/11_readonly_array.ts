// It's a “locked” array
// Can't be Modified

const numbersConst : readonly number[] = [1, 2, 3];

const nameReadOnly: ReadonlyArray<string> = ["Zeke", "Maya", "Leo"];

function getNames(): readonly string[] {
  return ["Alice", "Bob", "Charlie"];
}

const nameFun = getNames();
// nameFun.push("Hello")