console.log("Node Running in the Terminal");

const array = [1, 2, 3, 4, 5];

console.log("array", array);

setTimeout(() => {
  console.log(`array -> ${array}, Printed`);
}, 2000);

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3));

// to run ==> node <fileName>
