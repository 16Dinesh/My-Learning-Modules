const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@as-integrations/express5");

const userRoutes = require("./routes/user.routes.js");
const { typeDefs } = require("./graphql/typeDefs.js");
const { resolvers } = require("./graphql/resolvers.js");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
app.use(bodyParser.json());

connectDB();

//REST

app.use("/api/user", userRoutes);

//GraphQL

(async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  app.use("/graphql", expressMiddleware(server));

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}`);
  });
})();
