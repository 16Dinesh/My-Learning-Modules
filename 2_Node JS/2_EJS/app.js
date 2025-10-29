const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.set("views", path.join(__dirname, "/views"));

app.get("/hello", (req, res) => {
  res.send("this the hello ");
});

app.get("/rolldice", (req, res) => {
  let num = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceVal: num });
});

app.get("/ig/:username", (req, res) => {
  const instaData = require("./data.json"); //to get data from json
  let { username } = req.params;
  const data = instaData[username];
  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.render("error");
  }
});

app.use((req, res) => {
  res.status(404).send(`<h1>This Page Does not Exist</h1>`);
});

app.listen(port, () => {
  console.log("listening to the ", port);
});
