const mongoose = require("mongoose");

const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chat');
}

let allChats = [
    {
        from : "Dinesh",
        to: "Varsha",
        msg : "First msg",
        created_at: new Date(),
    },
    {
        from : "Varsha",
        to: "Dinesh",
        msg : "Second msg",
        created_at: new Date(),
    },
    {
        from : "Brutu",
        to: "Cesar",
        msg : "Avu",
        created_at: new Date(),
    },
    {
        from : "Cesar",
        to: "Brutu",
        msg : "Bow",
        created_at: new Date(),
    },
    {
        from : "Dinesh",
        to: "Varsha",
        msg : "Did you Poop?",
        created_at: new Date(),
    },
    {
        from : "Varsha",
        to: "Dinesh",
        msg : "No!",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);