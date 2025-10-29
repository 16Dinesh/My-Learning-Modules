const myPromise = new Promise((res, rej) => {
  const ok = true;

  setTimeout(() => {
    if (ok) {
      res("done the OP");
    } else {
      rej("NOT Done");
    }
  }, 2000);
});

function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Can not perform division by 0");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFn(10, 2)
  .then((result) => console.log(result, "is Result"))
  .catch((error) => console.log(error, "err"));

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Task is completed"));
