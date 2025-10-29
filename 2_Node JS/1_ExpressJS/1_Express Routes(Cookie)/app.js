const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("aNoiceCode"));

const users = require('./routes/users')
const posts = require('./routes/posts')

app.get("/getsignedcookies", (req, res) => {
  res.cookie("made-by: admin", { signed: true });
  res.send("Send Signed Cookie");
});

app.get("/verify", (req, res) => {
  res.send("verified");
});

app.get("/greet", (req, res) => {
  res.cookie("This is Co0kie", "active");
  res.cookie("Greet", "hello")
  res.send("Sending Some Cookies")
});

app.get("/", (req, res) => {
    res.send("Hi, I'm Your Root View")
})

app.use("/user", users)
app.use("/posts", posts)


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
