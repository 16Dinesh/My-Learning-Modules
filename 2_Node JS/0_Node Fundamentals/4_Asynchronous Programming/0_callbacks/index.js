// console.log(process.argv);

const fs = require("fs");

function greet(name, callBack) {
  console.log("name", name);
  callBack();
}

function bye() {
  console.log("Good Bye!");
}

fs.readFile("message.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error -", err);
    return;
  }
  console.log("File content:", data);
});

console.log("Reading file...");
greet("dinesh", bye);
