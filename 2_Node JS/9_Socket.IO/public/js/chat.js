const socket = io();

const joinContainer = document.getElementById("joinContainer");
const chatContainer = document.getElementById("chatContainer");
const usernameInput = document.getElementById("username");
const roomInput = document.getElementById("room");
const joinBtn = document.getElementById("joinBtn");

const roomName = document.getElementById("roomName");
const messages = document.getElementById("messages");
const msgInput = document.getElementById("msgInput");
const sendBtn = document.getElementById("sendBtn");

let username, room;

// Join room
joinBtn.addEventListener("click", () => {
  username = usernameInput.value.trim();
  room = roomInput.value.trim();
  if (!username || !room) return alert("Enter both username and room!");

  socket.emit("joinRoom", { username, room });

  joinContainer.classList.add("hidden");
  chatContainer.classList.remove("hidden");
  roomName.textContent = `Room: ${room}`;
});

// Send message
sendBtn.addEventListener("click", () => {
  const msg = msgInput.value.trim();
  if (msg) socket.emit("chatMessage", msg);
  msgInput.value = "";
});

// Display message
socket.on("message", (msg) => {
  const div = document.createElement("div");
  div.classList.add("p-1");
  div.innerHTML = msg;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
});
