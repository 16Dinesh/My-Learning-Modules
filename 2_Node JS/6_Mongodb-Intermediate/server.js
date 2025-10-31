require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db");
const productRoutes = require("./routes/products.routes");
const bookRoutes = require("./routes/book.routes");
connectToDB();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/reference", bookRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
