const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


const sessionOptions = {
  secret: "my-super-secrets-string",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.errmsg = req.flash("Error");
  res.locals.messages = req.flash("success");
  next();
});

app.get("/register", (req, res) => {
  let { name = "Dinesh" } = req.query;
  req.session.name = name;
  if (name === "Dinesh") {
    req.flash("Error", "user not registered ");
  } else {
    req.flash("success", "user registered success");
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("page.ejs", { name: req.session.name });
});


app.get("/test", (req,res) => {
    res.send("test successful!9")
})

app.get("/reqcount", (req, res) => {
    if (req.session.count) {
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    res.send(`You send a request ${req.session.count} times`)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
