// module.exports
// require

const firstModule = require("./firstModule");

console.log(firstModule.sum(2, 3));

try {
  console.log("trying to divide by Zero");
  // let results = firstModule.div(0, 0)
  let results = firstModule.div(0, 10);
  console.log("result", results);
} catch (e) {
  console.log("Error", e.message);
}

//module wrapper
// {
//     function(exports , require, module, __filename, __dirname) {
//         // module code goes here
//     }
// }
