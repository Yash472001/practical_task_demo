const express = require("express");
const app = express();
const cors = require("cors");

const connectToDb = require("./db/connectTodb");
const config = require("./config/development.json");
const router = require("./routes/index");

const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema.js");
const { resolvers } = require("./resolver.js");


const PORT = config.PORT || 8080;
const FRONTEND_URL = config.FRONTEND_URL;

async function startServer() {
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}

startServer();

app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json());

// app.use(router);



app.listen(PORT,() => {
    console.log(`Started Running On Port No: ${PORT}`);
    connectToDb();
})
