const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// ---- Socket.IO logic ----
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Join room
  socket.on("joinRoom", ({ username, room }) => {
    socket.join(room);
    socket.username = username;
    socket.room = room;

    socket.emit("message", `Welcome ${username} to room: ${room}`);
    socket.broadcast
      .to(room)
      .emit("message", `${username} has joined the chat`);

    console.log(`${username} joined room ${room}`);
  });

  // Listen for chat messages
  socket.on("chatMessage", (msg) => {
    io.to(socket.room).emit("message", `${socket.username}: ${msg}`);
  });

  // When user disconnects
  socket.on("disconnect", () => {
    if (socket.username && socket.room) {
      io.to(socket.room).emit(
        "message",
        `${socket.username} has left the room`
      );
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
