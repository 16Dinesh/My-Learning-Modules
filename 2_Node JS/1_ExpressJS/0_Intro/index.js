// npm i express

const express = require("express");
const app = express();

// console.dir(app)

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.get("/:username/:id", (req, res) => {
  // console.log(req.params.id)
  let { username, id } = req.params;
  // res.send(`This is the Parameter ${req.params.id}`)
  // res.send(`Welcome to The Page ${username} and ${id}`)
  let html = `<h1>Welcome to the Club @${username}</h1>`;
  res.send(html);
});

//search?q=anyThing
app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    return res.send("No Such Search");
  }
  res.send(`Search Result for Query Result <h1> ${q}</h1>`);
});

app.get("/data", (req, res) => {
  const data = [
    {
      id: 1,
      label: "Product 1",
    },
    {
      id: 2,
      label: "Product 2",
    },
    {
      id: 3,
      label: "Product 3",
    },
  ];
  res.json(data);
});

// not working for Ex-5 Version
// app.get("/*", (req, res) => {
//   res.status(404).send(`<h1>This path does not exist</h1>`);
// });

app.use((req, res) => {
  res.status(404).send("<h1>This path does not exist</h1>");
});

let port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
