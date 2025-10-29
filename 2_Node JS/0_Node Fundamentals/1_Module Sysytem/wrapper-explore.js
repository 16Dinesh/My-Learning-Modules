console.log("NOde Module Wrapper");

console.log("__filename in wrapper Explore", __filename);
console.log("__dirname in the wrapper explore", __dirname);

module.exports.greet = function (word) {
  console.log(`hello ${word}`);
};
