const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("name", (name) => {
  console.log(`name -> ${name}`);
});

myEmitter.emit("name", "dinesh");
