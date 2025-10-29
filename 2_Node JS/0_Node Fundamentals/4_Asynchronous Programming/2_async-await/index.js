function getData() {
  return new Promise((res, rej) => {
    setTimeout(() => res("Data Loading From The Function"), 2000);
  });
}

async function showData() {
  console.log("Fetching data...");
  const data = await getData();
  console.log(data);
  console.log("Done Getting Data!");
}

async function division(num1, num2) {
  try {
    if (num2 === 0) throw new Error("Can not divide by 0");
    return num1 / num2;
  } catch (error) {
    console.error("error", error);
    return null;
  }
}

async function mainFn() {
  console.log(await division(10, 2));
  console.log(await division(10, 0));
}

mainFn();
showData();
