const giveMeAJoke = require("give-me-a-joke");
const figlet = require("figlet");

let fn = "dinesh";
let ln = "varsha";

figlet(fn, function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

figlet(ln, function (err, data) {
  console.log(data);
});

giveMeAJoke.getRandomDadJoke(function(joke) {
  console.log(joke);
});

giveMeAJoke.getCustomJoke(fn, ln, function(joke) {
  console.log(joke);
});
